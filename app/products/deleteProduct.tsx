"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

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

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function DeleteProduct({ id, title }: Product) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await fetch(`https://fake-crud-api.vercel.app/products/${id}`, {
        method: "DELETE",
      });

      // Refresh data dan tutup modal
      router.refresh();
      setModal(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger asChild>
        <Button className="font-bold" variant="destructive">
          <Trash2/>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Delete Product</DialogTitle>
          <DialogDescription className="text-base">
            Are you sure you want to delete the product <strong>{title}</strong>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="font-bold" type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button className="font-bold" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
