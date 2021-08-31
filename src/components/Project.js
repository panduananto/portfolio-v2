import React from 'react';

import Container from './Container';
import ProjectItem from './ProjectItem';
import Tabs from './Tabs';

import comfyRestoThumb from '../assets/comfy-resto.png';
import soccer101Thumb from '../assets/soccer-101.png';
import fishClassificationThumb from '../assets/fish-clf.png';

function Project() {
  const categories = [
    {
      'Machine Learning': [
        {
          name: 'Web Based Fish Classification',
          picture: fishClassificationThumb || null,
          description:
            'Machine learning and front-end project. An app to classify 10 fish species. Machine learning model is based on MobileNets-V1 architecture trained with transfer learning technique. Front-end website built with React.js and Tailwind-CSS.',
          tools: ['HTML', 'Tailwind-CSS', 'React.js', 'Python', 'Keras', 'Tensorflow.js'],
          demo: 'https://fish-clf.web.app/',
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
        {
          name: 'Heavy Metal vs Pop',
          picture: null,
          description:
            'Machine learning project. I use R programming languange in this project. The dataset used to train the machine learning model was acquired through Spotify-API. Before model training process, i performed EDA to gain insight from the dataset. The model that was used is K-Nearest Neighbor. I also performed hyperparameter tuning to find the best K value for the model. After the best model is built, the model is evaluated using confusion matrix.',
          tools: ['R', 'Spotify-API'],
          demo: null,
          code: 'https://github.com/panduananto/pop-or-heavymetal',
        },
      ],
    },
    {
      'Web Development': [
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
      ],
    },
  ];

  return (
    <div className="transition duration-300 ease-in-out bg-gray-100 dark:bg-gray-900">
      <Container>
        <h2 className="text-title mb-14">Projects</h2>
        <Tabs>
          {categories.map((category) => (
            <div key={Object.keys(category)} label={Object.keys(category)}>
              {Object.values(category).map((works) =>
                works.map((work) => (
                  <ProjectItem
                    key={work.name}
                    picture={work.picture}
                    name={work.name}
                    demo={work.demo}
                    code={work.code}
                    description={work.description}
                    tools={work.tools}
                  ></ProjectItem>
                )),
              )}
            </div>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}

export default Project;
