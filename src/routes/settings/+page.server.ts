import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		console.log("form submit!")

        return { success: true };
	},
} satisfies Actions;