# image-comparison-slider

ImageComparisonSlider is a simple component  which is designed using angular to compare two images.

![alt text](https://github.com/GnanaDeepthi/image-comparison-slider/blob/master/compareImages/hcl.png)


To preview demo of ImageComparisonSlider Component, [Click Here](https://angular-ylx175.stackblitz.io/).

### Prerequisites

Download the  ImageComparisonSlider component and install the required packages and run the application.


### Installing

```sh
$ npm install
```

### Run Server

```sh
$ ng serve
```

### Adding  VideoMedia component to your project

```sh
<app-image-compare ImageOne="https://irpaai.com/wp-content/uploads/2015/11/HCL-Logo-High-Res.jpg"
ImageTwo="https://www.aecus.com/wp-content/uploads/2015/05/HCL-logo-01B-05.jpg"></app-image-compare>
```

### Input for VideoMedia component

```sh
  @Input()  ImageOne: string;
  @Input()  ImageTwo: string;
 
```

| Input | Purpose |

| ------ | ------ |

| ImageOne |   Before comparison of Image |

| ImageTwo | After Comparison of Image  |




#### How it works?

- Use the slider option and drag so that you can see the difference of the images before and after.







