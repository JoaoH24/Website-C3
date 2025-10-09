import useInView from "../../hooks/useInView";

export default function FadeInSection({ children, className = "" }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
