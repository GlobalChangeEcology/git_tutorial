<template>
    <div
      class="arrow-container"
      :style="containerStyle"
    >
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import rough from "roughjs/bundled/rough.esm.js";
  
  export default {
    name: "RoughArrow",
    props: {
      x1: {
        type: Number,
        required: true, // Starting x-coordinate
      },
      y1: {
        type: Number,
        required: true, // Starting y-coordinate
      },
      x2: {
        type: Number,
        required: true, // Ending x-coordinate
      },
      y2: {
        type: Number,
        required: true, // Ending y-coordinate
      },
      stroke: {
        type: String,
        default: "black", // Arrow stroke color
      },
      strokeWidth: {
        type: Number,
        default: 2, // Arrow stroke width
      },
      roughness: {
        type: Number,
        default: 1, // Roughness of the arrow
      },
    },
    mounted() {
      this.drawArrow();
    },
    methods: {
      drawArrow() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
        const roughCanvas = rough.canvas(canvas);
  
        // Set canvas size dynamically based on arrow coordinates
        canvas.width = Math.abs(this.x2 - this.x1) + 20;
        canvas.height = Math.abs(this.y2 - this.y1) + 20;
  
        // Adjust canvas position to ensure the arrow fits
        const offsetX = Math.min(this.x1, this.x2);
        const offsetY = Math.min(this.y1, this.y2);
  
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Draw the rough arrow
        roughCanvas.linearPath(
          [
            [this.x1 - offsetX, this.y1 - offsetY],
            [this.x2 - offsetX, this.y2 - offsetY],
          ],
          {
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            roughness: this.roughness,
          }
        );
  
        // Draw the arrowhead
        const arrowheadSize = 10;
        const angle = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
        roughCanvas.polygon(
          [
            [
              this.x2 - offsetX,
              this.y2 - offsetY,
            ],
            [
              this.x2 - offsetX - arrowheadSize * Math.cos(angle - Math.PI / 6),
              this.y2 - offsetY - arrowheadSize * Math.sin(angle - Math.PI / 6),
            ],
            [
              this.x2 - offsetX - arrowheadSize * Math.cos(angle + Math.PI / 6),
              this.y2 - offsetY - arrowheadSize * Math.sin(angle + Math.PI / 6),
            ],
          ],
          {
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            roughness: this.roughness,
            fill: this.stroke,
          }
        );
      },
    },
    computed: {
      containerStyle() {
        return {
          position: "absolute",
          top: `${Math.min(this.y1, this.y2)}px`,
          left: `${Math.min(this.x1, this.x2)}px`,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .arrow-container {
    position: relative;
  }
  </style>