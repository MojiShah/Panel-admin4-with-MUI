import { create } from "zustand";
import { persist } from "zustand/middleware";

let productStore = set => ({
    dopen:true,
    rows:[],
    setRows: rows => set(state => ({rows:rows})),
    updateDopen:dopen => set(state => {dopen:dopen})
});

productStore = persist(productStore , {name: "cdot_store_api"});
export const useProductStore = create(productStore);