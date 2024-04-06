import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './LargeToggle.module.css';

/**
 * Implements a stylized toggle switch using Framer Motion for smooth spring animations. 
 * This toggle demonstrates the concept of a privacy setting within the application, 
 * providing users with a tangible interaction to switch between states.
 *
 * The toggle's state is managed with React's useState hook, allowing for dynamic updates 
 * based on user interaction. The spring animation enriches the experience by mimicking 
 * the physical properties of a real-world switch, reinforcing the action's immediacy and impact.
 *
 * This component exemplifies how user interface elements can be both functional and expressive, 
 * enhancing the overall usability and aesthetic appeal of the application.
 *
 * @returns {JSX.Element} A motion-enhanced toggle switch indicating a privacy setting.
 */
export function LargeToggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
}