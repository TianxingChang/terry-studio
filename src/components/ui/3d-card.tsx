// import { clsx } from "clsx";
// import React, {
//   createContext,
//   useState,
//   useContext,
//   useRef,
//   useEffect,
// } from "react";

// // Utility function to replace Next.js cn
// const cn = (...inputs: (string | undefined)[]): string => clsx(inputs);

// export const CardBody = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// const MouseEnterContext = createContext<
//   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
// >(undefined);

// export const CardContainer = ({
//   children,
//   className,
//   containerClassName,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseEntered, setIsMouseEntered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//   };

//   const handleMouseEnter = () => {
//     setIsMouseEntered(true);
//     if (!containerRef.current) return;
//   };

//   const handleMouseLeave = () => {
//     if (!containerRef.current) return;
//     setIsMouseEntered(false);
//     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   };

//   return (
//     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//       <div
//         className={cn(
//           "flex justify-center items-center py-20",
//           containerClassName
//         )}
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <div
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className={cn(
//             "flex relative justify-center items-center transition-all duration-200 ease-linear",
//             className
//           )}
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     </MouseEnterContext.Provider>
//   );
// };

// // Add this interface near the top of the file with other type definitions
// // Remove or use the TagProps interface
// interface CardItemProps {
//   as?: React.ElementType; // Changed from keyof JSX.IntrinsicElements | React.ComponentType<any>
//   children?: React.ReactNode;
//   className?: string;
//   translateX?: number;
//   translateY?: number;
//   translateZ?: number;
//   rotateX?: number;
//   rotateY?: number;
//   rotateZ?: number;
//   [key: string]: any;
// }

// export const CardItem = ({
//   as: Component = "div",
//   children,
//   className,
//   translateX = 0,
//   translateY = 0,
//   translateZ = 0,
//   rotateX = 0,
//   rotateY = 0,
//   rotateZ = 0,
//   ...rest
// }: CardItemProps) => {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const [isMouseEntered] = useMouseEnter();

//   useEffect(() => {
//     handleAnimations();
//   }, [isMouseEntered]);

//   const handleAnimations = () => {
//     if (!ref.current) return;
//     if (isMouseEntered) {
//       ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//     } else {
//       ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//     }
//   };

//   return (
//     <Component
//       ref={ref}
//       className={cn("transition duration-200 ease-linear w-fit", className)}
//       {...rest}
//     >
//       {children}
//     </Component>
//   );
// };

// export const useMouseEnter = () => {
//   const context = useContext(MouseEnterContext);
//   if (context === undefined) {
//     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//   }
//   return context;
// };

import { cn } from "../../lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

interface CardContainerProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardItemProps {
  as?: React.ElementType;
  children?: React.ReactNode; // 修改这里，允许接收 ReactNode 类型的 children
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  href?: string; // 添加 href 属性支持
  target?: string; // 添加 target 属性支持
  rel?: string; // 添加 rel 属性支持
  [key: string]: any; // 允许其他属性通过
}

export const CardItem = React.forwardRef<HTMLDivElement, CardItemProps>(
  (
    {
      as: Component = "div",
      children,
      className,
      translateX = 0,
      translateY = 0,
      translateZ = 0,
      rotateX = 0,
      rotateY = 0,
      rotateZ = 0,
      ...rest
    },
    ref
  ) => {
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
      handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = () => {
      if (!ref || !("current" in ref) || !ref.current) return;
      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    };

    return (
      <Component
        ref={ref}
        className={cn("transition duration-200 ease-linear w-fit", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

CardItem.displayName = "CardItem";

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
  containerClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "flex justify-center items-center py-20",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex relative justify-center items-center transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

// export const CardItem: React.FC<CardItemProps> = ({
//   as: Tag = "div",
//   children,
//   className,
//   translateX = 0,
//   translateY = 0,
//   translateZ = 0,
//   rotateX = 0,
//   rotateY = 0,
//   rotateZ = 0,
//   ...rest
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isMouseEntered] = useMouseEnter();

//   useEffect(() => {
//     handleAnimations();
//   }, [isMouseEntered]);

//   const handleAnimations = () => {
//     if (!ref.current) return;
//     if (isMouseEntered) {
//       ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//     } else {
//       ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//     }
//   };

//   return (
//     <Tag
//       ref={ref}
//       className={cn("transition duration-200 ease-linear w-fit", className)}
//       {...rest}
//     >
//       {children}
//     </Tag>
//   );
// };

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
