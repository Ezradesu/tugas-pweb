"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  title: string;
  price: number;
};

export default function AddProduct() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await fetch("https://fake-crud-api.vercel.app/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Reset form, refresh data, dan tutup modal
      reset();
      router.refresh();
      setModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger asChild>
        <Button className="font-bold" variant="outline">
          Add New Products
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Add New Products</DialogTitle>
            <DialogDescription className="text-base">
              Add your products name and price here. When youre done, hit the submit button!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right text-lg">
                Title
              </Label>
              <Input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Product Name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right text-lg">
                Price
              </Label>
              <Input
                {...register("price", { required: "Price is required", valueAsNumber: true })}
                type="number"
                placeholder="Product Price"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="font-bold" type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button className="font-bold" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
