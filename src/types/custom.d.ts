/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-27 01:43:28
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 01:43:32
 * @FilePath: /terry-studio/src/types/custom.d.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved. 
 */
declare module '*.glb' {
    const content: any;
    export default content;
}

declare namespace JSX {
    interface IntrinsicElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
    }
}