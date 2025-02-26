/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 23:54:43
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 23:54:52
 * @FilePath: /terry-studio/src/lib/utils.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved. 
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}