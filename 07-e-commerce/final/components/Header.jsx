// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import { CiSearch, CiHeart } from "react-icons/ci";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
import { useUser } from "@clerk/nextjs";

export default function Header() {
  const router = useRouter();
  const user = useUser();
  const cartLength = user?.user?.publicMetadata?.cart?.length ?? 0;

  return (
    <header className="sticky top-0 z-10 bg-white px-20 py-8 flex justify-between items-center">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex gap-4 cursor-pointer"
      >
        <div>
          <img alt="Company Logo" src="/logo/logo.png" />
        </div>

        <div>
          <img src="/logo/title.png" alt="Title" />
        </div>
      </div>

      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
      </div>

      <div className="flex gap-6 items-center">
        <CiSearch className="text-3xl" />
        <CiHeart className="text-3xl" />
        <div className="relative ">
          <CiShoppingCart
            onClick={() => router.push("/cart")}
            className="text-3xl cursor-pointer"
          />

          <SignedIn>
            <span className="absolute bg-black text-white text-xs h-5 w-5 flex items-center justify-center rounded-full -right-4 -bottom-2">
              {cartLength}
            </span>
          </SignedIn>
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}
