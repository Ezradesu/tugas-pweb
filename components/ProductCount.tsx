"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function ProductCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch jumlah produk dari API
    async function fetchProductCount() {
      try {
        const response = await fetch(
          "https://fake-crud-api.vercel.app/products"
        );
        const data = await response.json();
        setCount(data.length);
      } catch (error) {
        console.error("Error fetching product count:", error);
      }
    }

    fetchProductCount();
  }, []);

  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Total Products</CardTitle>
      </CardHeader>
      <CardContent className="">
        {count === null ? (
          <Loader2 className="mx-auto animate-spin" />
        ) : (
          <p className="text-xl font-normal">{count} items</p>
        )}
      </CardContent>
    </Card>
  );
}
