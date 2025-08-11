import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

export const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedLogos, setProcessedLogos] = useState<{
    icon: string | null;
    text: string | null;
  }>({ icon: null, text: null });

  useEffect(() => {
    const processLogos = async () => {
      if (isProcessing) return;
      
      setIsProcessing(true);
      try {
        // Process icon
        const iconResponse = await fetch('/lovable-uploads/f66def2f-c175-45e1-a2fd-26742e104c89.png');
        const iconBlob = await iconResponse.blob();
        const iconImage = await loadImage(iconBlob);
        const processedIconBlob = await removeBackground(iconImage);
        const iconUrl = URL.createObjectURL(processedIconBlob);

        // Process text logo
        const textResponse = await fetch('/lovable-uploads/af0d949e-d8dc-4aa2-a602-f10b816398bb.png');
        const textBlob = await textResponse.blob();
        const textImage = await loadImage(textBlob);
        const processedTextBlob = await removeBackground(textImage);
        const textUrl = URL.createObjectURL(processedTextBlob);

        setProcessedLogos({
          icon: iconUrl,
          text: textUrl
        });
      } catch (error) {
        console.error('Error processing logos:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogos();
  }, []);

  return { processedLogos, isProcessing };
};