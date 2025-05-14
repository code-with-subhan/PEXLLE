"use client"; // 👈 Add this at the top to make it a client component

import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
