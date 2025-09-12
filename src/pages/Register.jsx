"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import * as LabelPrimitive from "@radix-ui/react-label";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-200 p-4">
      <div className="shadow-xl w-full max-w-md rounded-2xl bg-white p-6 md:p-10 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-teal-700 mb-2">
          Join TravelExplore
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Sign up and start exploring the world with us!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="john@travel.com" type="email" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="group/btn relative block w-full rounded-md bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-2 text-lg mb-6 hover:from-teal-600 hover:to-blue-600 transition"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

          <div className="flex flex-col space-y-3">
            <SocialButton icon={IconBrandGithub} text="GitHub" />
            <SocialButton icon={IconBrandGoogle} text="Google" />
            <SocialButton icon={IconBrandOnlyfans} text="OnlyFans" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

// Bottom Gradient Effect for Buttons
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

// Social Button Component
const SocialButton = ({ icon: Icon, text }) => (
  <button className="group/btn flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-100 px-4 font-medium text-black dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 transition">
    <Icon className="h-4 w-4" />
    <span className="text-sm">{text}</span>
    <BottomGradient />
  </button>
);

// LabelInputContainer Wrapper
const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);

// Input Component
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px, #14b8a6, transparent 80%)
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-white",
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

// Label Component
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
