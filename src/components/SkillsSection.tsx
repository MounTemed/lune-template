import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

const SkillTag = React.memo(({ skill }: { skill: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
    >
      {skill}
    </motion.div>
  );
});

SkillTag.displayName = "SkillTag";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SkillCategory = React.memo(
  ({
    title,
    icon,
    skillsList,
  }: {
    title: string;
    icon: string;
    skillsList: string[];
  }) => (
    <motion.div variants={skillCategoryVariants}>
      <GlassCard className="p-4">
        <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
          <span className="mr-2 text-xl">{icon}</span> {title}
        </h3>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {skillsList.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  ),
);

SkillCategory.displayName = "SkillCategory";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skillsList: skills.programmingLanguages,
    },
    { title: "DevOps", icon: "🚀", skillsList: skills.DevOps },
    {
      title: "Cloud && Linux",
      icon: "☁️",
      skillsList: skills.CloudandLinux,
    },
    {
      title: "Database && Storage",
      icon: "🗄️",
      skillsList: skills.databaseAndStorage,
    },
    { title: "Monitoring", icon: "📊", skillsList: skills.Monitoring },
    { title: "Backend", icon: "🧰", skillsList: skills.Backend },
  ];

  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🛠️ Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skillsList={category.skillsList}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
