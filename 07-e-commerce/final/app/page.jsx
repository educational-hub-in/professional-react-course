import AllCategories from "@/components/Categories/AllCategories";

import Promo from "@/components/Landing/Promo";

export default function Page() {
  return (
    <main className="mx-8">
      <Promo
        title="Classic Exclusive"
        description="Women's Collection"
        discount={40}
        image="/landing/women-promo.png"
      />

      <section className="my-12 space-y-4">
        <h2 className="text-6xl">Shop by Categories</h2>

        <AllCategories />
      </section>
    </main>
  );
}
