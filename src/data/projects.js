const projects = [

{
  title: "Humanoid Locomotion using DQN",

  description:
    "Deep reinforcement learning pipeline enabling a simulated humanoid agent to learn stable walking.",

  github: "https://github.com/akshay-raj-m007/",

  images: [
    `${import.meta.env.BASE_URL}/images/projects/dqn/image_output_1.jpg`,
    `${import.meta.env.BASE_URL}/images/projects/dqn/robot.png`
  ],

  details:
    "Developed a reinforcement learning pipeline for humanoid locomotion using Deep Q Networks. The system learns stable walking behaviour from an image defined initial pose in simulation.",

  tags: [
    "Python",
    "PyTorch",
    "Reinforcement Learning",
    "Deep Q Network"
  ]
},

{
  title: "Geospatial Land Classification",

  description:
    "Transfer learning using ResNet18 to classify satellite imagery.",

  github: "https://github.com/akshay-raj-m007/AI_for_sustainability",

  images: [
    `${import.meta.env.BASE_URL}images/projects/ai-sustainability/img_1.png`,
    `${import.meta.env.BASE_URL}images/projects/ai-sustainability/sus1.png`,
    `${import.meta.env.BASE_URL}images/projects/ai-sustainability/sus2.png`,
    `${import.meta.env.BASE_URL}images/projects/ai-sustainability/sus3.png`
  ],

  details:
    "Implemented a PyTorch ResNet18 transfer learning model to classify satellite imagery using ESA WorldCover dataset achieving around 93 percent accuracy.",

  tags: [
    "PyTorch",
    "Deep Learning",
    "ResNet",
    "Computer Vision",
    "Remote Sensing"
  ]
},
{
  title : "Human Detection and Tracking in Video",

  description : "A computer vision pipeline for detecting and tracking people in video streams.",

  github : "https://github.com/akshay-raj-m007/Object-Detection-YOLO",

  images: [
    `${import.meta.env.BASE_URL}images/projects/yolo-video/im1.png`,
    `${import.meta.env.BASE_URL}images/projects/yolo-video/a1.png`,
    `${import.meta.env.BASE_URL}images/projects/yolo-video/im2.png`,
    `${import.meta.env.BASE_URL}images/projects/yolo-video/a2.png`
  ],

  details: "Computer vision pipeline that detects and tracks people in video using YOLOv8 and ByteTrack, generating annotated output with bounding boxes, tracking IDs, confidence scores, and real-time person counts",

  tags: [
    "OpenCV",
    "Computer Vision",
    "YOLO",
    "Object Detection"
  ]
}

]

export default projects