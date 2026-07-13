import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

export interface ToastData {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface ToastProps {
  toast: ToastData | null;
  onClose: () => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (toast) {
      // Trigger fade-in animation
      setIsVisible(true);
      setIsLeaving(false);

      // Auto-dismiss after 4 seconds
      const timer = setTimeout(() => {
        setIsLeaving(true);
        // Wait for fade-out animation to complete before removing
        setTimeout(() => {
          setIsVisible(false);
          onClose();
        }, 300);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast || !isVisible) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div
      className={`fixed top-20 right-4 z-50 max-w-sm transform transition-all duration-300 ${
        isLeaving ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div
        className={`rounded-lg shadow-2xl p-4 flex items-start space-x-3 ${
          isSuccess ? 'bg-green-500' : 'bg-red-500'
        } text-white`}
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle className="h-6 w-6" />
          ) : (
            <XCircle className="h-6 w-6" />
          )}
        </div>

        {/* Message */}
        <div className="flex-1">
          <p className="font-semibold text-sm md:text-base">{toast.message}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            setIsLeaving(true);
            setTimeout(() => {
              setIsVisible(false);
              onClose();
            }, 300);
          }}
          className="flex-shrink-0 hover:bg-white hover:bg-opacity-20 rounded-md p-1 transition-colors"
          aria-label="Close notification"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// Toast Manager Hook
let toastId = 0;
let toastCallback: ((toast: ToastData | null) => void) | null = null;

export function useToast() {
  const [toast, setToast] = useState<ToastData | null>(null);

  useEffect(() => {
    toastCallback = setToast;
    return () => {
      toastCallback = null;
    };
  }, []);

  const showToast = (message: string, type: 'success' | 'error') => {
    const newToast: ToastData = {
      id: ++toastId,
      message,
      type,
    };
    toastCallback?.(newToast);
  };

  const hideToast = () => {
    toastCallback?.(null);
  };

  return {
    toast,
    showToast,
    hideToast,
  };
}