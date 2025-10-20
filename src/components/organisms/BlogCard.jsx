import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const BlogCard = ({ image, category, title, link }) => {
  return (
    <motion.div
      className="bg-[#0b0f19] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 max-w-sm cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      {/* Imagen del proyecto */}
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="text-gray-500 text-sm">No Image</div>
        )}
      </div>

      {/* Contenido inferior */}
      <div className="p-5">
        <p className="text-sm text-blue-400 font-medium">{category}</p>
        <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>

        <a
          href={link}
          className="mt-2 inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-all duration-200"
        >
          Leer <IconArrowRight stroke={2} />
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
