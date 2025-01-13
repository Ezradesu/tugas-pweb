import ProductCount from "@/components/ProductCount";

export default function Home() {
  return (
    <main className="mx-10 mt-10">
      <h1 className="text-3xl font-bold my-5">Welcome to dashboard</h1>
      <ProductCount />
    </main>
  );
}
