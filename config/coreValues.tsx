export type CoreValues = typeof coreValues;
import {
  BrainIconDark,
  FlexIconDark,
  FocusEyeIconDark,
  FocusIconDark,
  PeopleIconDark,
  PyramidIconDark,
} from "@/components/icons";

export const coreValues = [
  {
    superTitle: "EFFICIENCY",
    title: "Focus on what matters",
    description:
      "Prioritize the 20% of actions, strategies, and ideas that yield 80% of the results. Everything we do is purposeful and impactful.",
    iconDark: <FocusIconDark />,
  },
  {
    superTitle: "IMPACT",
    title: "Future-proof",
    description:
      "Work is fueled by a future-oriented mindset. We leverage technology and smart design to help our partners grow exponentially.",
    iconDark: <PyramidIconDark />,
  },
  {
    superTitle: "FOCUS",
    title: "Precision and clarity",
    description:
      "Clear thinking leads to smart decisions. We believe in transparency, simplicity, and focus, helping partners cut through complexity to reach their goals efficiently.",
    iconDark: <FocusEyeIconDark />,
  },
  {
    superTitle: "STRATEGY",
    title: "Strategic empowerment",
    description:
      "Our goal is not only to deliver solutions but to empower partners with tools, strategies, and insights that foster independence and long-term success.",
    iconDark: <FlexIconDark />,
  },
  {
    superTitle: "GROWTH",
    title: "Continuous improvement",
    description:
      "We are committed to learning, adapting, and improving every day—just like the partners we serve.",
    iconDark: <BrainIconDark />,
  },
  {
    superTitle: "COMMUNITY",
    title: "Contribution to community",
    description:
      "By using our expertise to empower others, we aim to foster an environment where innovation, knowledge, and opportunities are shared, ensuring that our growth contributes to the greater good.",
    iconDark: <PeopleIconDark />,
  },
];
