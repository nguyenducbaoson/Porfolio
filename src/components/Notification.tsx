// components/common/Notification.tsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type NotificationProps = {
  message: string;
  show: boolean;
  type?: "success" | "error";
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({ message, show, onClose, type = "success" }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 px-6 py-4 rounded-2xl text-white shadow-xl z-[1000] ${bgColor}`}
        >
          <p className="text-sm">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
