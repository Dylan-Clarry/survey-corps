import authors
import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const t = initTRPC.context<Context>().create();

export const router = t.router({
    authors,
});

export type Router = typeof router;

export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
