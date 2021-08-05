import React from 'react';

import Container from './Container';
import ProjectItem from './ProjectItem';

import comfyRestoThumb from '../assets/comfy-resto.png';
import soccer101Thumb from '../assets/soccer-101.png';
import fishClassificationThumb from '../assets/fish-clf.png';

function Project() {
  const workData = [
    {
      name: 'ComfyResto',
      picture: comfyRestoThumb || null,
      description:
        'Front-end project created for Dicoding class submission. A simple web application that allows users to browse through a list of restaurants, write review for a restaurant, and like/unlike a restaurants. This web application is also a progressive web app which can be installed natively on mobile devices.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://comfy-resto.web.app/',
      code: 'https://github.com/panduananto/submission-dicoding-class-219',
    },
    {
      name: 'Soccer101',
      picture: soccer101Thumb || null,
      description:
        'Front-end project created for Dicoding class submission. A simple web application that allows users to browse through a list of football teams and its detail information based on its league, viewing standing table, and like/unlike a football teams. This web application is also a progressive web app which can be installed natively on mobile devices.',
      tools: ['HTML', 'CSS', 'MaterialUI', 'JavaScript'],
      demo: 'https://soccer101-55233.web.app/',
      code: 'https://github.com/panduananto/submission-dicoding-class-74-2',
    },
    {
      name: 'Web Based Fish Classification',
      picture: fishClassificationThumb || null,
      description:
        'Machine learning and front-end project. An app to classify 10 fish species. Machine learning model is based on MobileNets-V1 architecture trained with transfer learning technique. Front-end website built with React.js and Tailwind-CSS.',
      tools: ['HTML', 'Tailwind-CSS', 'React.js', 'Python', 'Keras', 'Tensorflow.js'],
      demo: null,
      code: 'https://github.com/panduananto/fish-clf-app',
    },
    {
      name: 'Melanoma Cancer Classification',
      picture: null,
      description:
        'Machine learning project which actually is my thesis. I implemented backpropagation neural network to classify melanoma cancer from an image. The process inside include image pre-processing to enhance image quality, segmentation of RoI, image feature extraction consists of color, shape, and texture which is used as input to the model, and then training the backpropagation neural network.',
      tools: ['Python', 'OpenCV', 'Keras', 'Scikit-learn'],
      demo: null,
      code: null,
    },
  ];

  return (
    <div className="bg-gray-100">
      <Container>
        <h2 className="text-title mb-14">Projects</h2>
        <ul className="flex flex-col gap-14 sm:gap-24">
          {workData.map((item, index) => (
            <ProjectItem
              key={index}
              picture={item.picture}
              name={item.name}
              demo={item.demo}
              code={item.code}
              description={item.description}
              tools={item.tools}
            ></ProjectItem>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Project;
