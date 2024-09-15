import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId } = auth();
  const { product } = await req.json();
  const user = await currentUser();

  if (!user || !userId) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Check if user has cart in metadata
  if (user && userId) {
    if (!user.publicMetadata.cart) {
      console.log("cart not found");
      await clerkClient().users.updateUserMetadata(userId, {
        publicMetadata: {
          cart: [],
        },
      });

      console.log("cart created");
    }

    // Add product to cart with quantity 1
    // Ensure cart is initialized as an array
    const cart = user.publicMetadata.cart || [];

    // Find the index of the product in the cart
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex === -1) {
      cart.push({ ...product, quantity: 1 });
      console.log("product added to cart");
    } else {
      cart[productIndex].quantity += 1;
      console.log("product quantity updated");
    }

    // Update the user's cart in the metadata
    await clerkClient().users.updateUserMetadata(userId, {
      publicMetadata: {
        cart,
      },
    });

    return NextResponse.json({ user });
  }

  return NextResponse.json({ user });
}

// create a patch request to update the quantity of a product in the cart or remove it

export async function PATCH(req) {
  const { userId } = auth();
  const { product } = await req.json();
  const user = await currentUser();

  if (!user || !userId) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Check if user has cart in metadata
  if (user && userId) {
    if (!user.publicMetadata.cart) {
      console.log("cart not found");
      await clerkClient().users.updateUserMetadata(userId, {
        publicMetadata: {
          cart: [],
        },
      });

      console.log("cart created");
    }

    // Add product to cart with quantity 1
    // Ensure cart is initialized as an array
    const cart = user.publicMetadata.cart || [];

    // Find the index of the product in the cart
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex === -1) {
      cart.push({ ...product, quantity: 1 });
      console.log("product added to cart");
    } else {
      cart[productIndex].quantity += 1;
      console.log("product quantity updated");
    }

    // Update the user's cart in the metadata
    await clerkClient().users.updateUserMetadata(userId, {
      publicMetadata: {
        cart,
      },
    });

    return NextResponse.json({ user });
  }

  return NextResponse.json({ user });
}
