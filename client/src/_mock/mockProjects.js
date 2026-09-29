// src/_mock/mockProjects.js
// Anirudh's projects (from resume). Used by ViewProject as the default
// project list, and as a fallback if a backend API is configured later.
// Replace the imageSrc SVGs with real screenshots whenever you have them,
// and add githubLink to any project to show a "View Code" button.

import eogBlink from "../assets/projects/eog-blink.svg";
import parkinsons from "../assets/projects/parkinsons.svg";
import lpgLeakage from "../assets/projects/lpg-leakage.svg";
import menstrual from "../assets/projects/menstrual.svg";
import gestureMirror from "../assets/projects/gesturemirror.svg";
import bciEeg from "../assets/projects/bci-eeg.svg";
import manipulators from "../assets/projects/manipulators.svg";
import adaroq from "../assets/projects/adaroq.svg";

const mockProjects = [
  {
    _id: "eog-blink",
    title: "EOG Blink Authentication",
    description:
      "A passive biometric authentication system that eliminates passwords on wearable devices by tracking natural eye movements (EOG) and using AI-based anomaly detection. Presented at IC2E3 2026.",
    imageSrc: eogBlink,
  },
  {
    _id: "parkinsons",
    title: "Multimodal Parkinson's Disease Detection",
    description:
      "Early Parkinson's screening AI that combines arm-swing kinematics, tremor characteristics, and speech biomarkers for accurate, non-invasive, and cost-effective detection. Presented at the NPDSM conference.",
    imageSrc: parkinsons,
  },
  {
    _id: "lpg-leakage",
    title: "Predictive LPG Gas Leakage Detection",
    description:
      "A purely software-based AI framework for predictive LPG leakage detection and risk assessment, integrating a soft-voting ensemble classifier with a BiLSTM network using Bahdanau attention — high accuracy without specialized hardware. Presented at NPDSM.",
    imageSrc: lpgLeakage,
  },
  {
    _id: "gesturemirror",
    title: "GestureMirror: Real-Time Robot Control",
    description:
      "A lightweight ROS2-based framework enabling real-time human–robot interaction through gesture recognition and speech commands, integrating multimodal inputs for intuitive and responsive robot control. Presented at NPDSM.",
    imageSrc: gestureMirror,
  },
  {
    _id: "bci-eeg",
    title: "Data Quality vs Model Complexity in Motor Imagery BCI",
    description:
      "A study showing EEGNet outperforms CSP+LDA in motor imagery BCI decoding, while EEG signal quality remains the dominant factor affecting performance and transferability. Presented at NPDSM.",
    imageSrc: bciEeg,
  },
  {
    _id: "menstrual",
    title: "Automated Menstrual Cycle Anomaly Detection",
    description:
      "Detects abnormal menstrual cycle patterns by comparing 1D-CNN and Random Forest models on time-series health data, supporting early health monitoring and personalized healthcare. Presented at NPDSM.",
    imageSrc: menstrual,
  },
  {
    _id: "manipulators",
    title: "Planar Serial Manipulators Benchmark",
    description:
      "A comprehensive multi-criteria benchmark of twelve planar serial manipulators (2R to 5R), evaluating how degrees of freedom and link-length distributions affect kinematic accuracy, dynamic manipulability, and closed-loop tracking.",
    imageSrc: manipulators,
  },
  {
    _id: "adaroq",
    title: "AdaRoQ: LLM Quantization",
    description:
      "A post-training quantization pipeline that compresses Large Language Models to ultra-low bit rates using piece-wise orthogonal rotations and Hessian-guided bit allocation to mitigate quantization error. Accepted at ICTCon 2026.",
    imageSrc: adaroq,
  },
];

export default mockProjects;
