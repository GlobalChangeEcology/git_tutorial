<template>
  <div
    class="rectangle-container"
    :style="containerStyle"
  >
    <canvas ref="canvas"></canvas>
    <span
      v-if="text"
      class="rectangle-text"
      :style="textStyle"
    >
      {{ text }}
    </span>
  </div>
</template>

<script>
import rough from "roughjs/bundled/rough.esm.js";

export default {
  name: "RoughRectangle",
  props: {
    width: {
      type: Number,
      default: 100, // Default width of the rectangle in pixels
    },
    height: {
      type: Number,
      default: 50, // Default height of the rectangle in pixels
    },
    color: {
      type: String,
      default: "#3498db", // Default rectangle color
    },
    fillStyle: {
      type: String,
      default: "hachure", // Default fill style
      validator: (value) =>
        ["hachure", "solid", "zigzag", "cross-hatch", "dots", "dashed", "zigzag-line"].includes(value),
    },
    text: {
      type: String,
      default: "", // Optional text inside the rectangle
    },
    textColor: {
      type: String,
      default: "black", // Default text color
    },
    fontSize: {
      type: String,
      default: "24px", // Default font size
    },
    fontWeight: {
      type: String,
      default: "bold", // Default font weight
    },
    fontFamily: {
      type: String,
      default: "'Patrick Hand', cursive", // Default font family
    },
    x: {
      type: Number,
      default: 0, // X position of the rectangle
    },
    y: {
      type: Number,
      default: 0, // Y position of the rectangle
    },
  },
  mounted() {
    this.drawRectangle();
  },
  methods: {
    drawRectangle() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const roughCanvas = rough.canvas(canvas);

      // Set canvas size
      canvas.width = this.width;
      canvas.height = this.height;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the rough rectangle with the specified fill style
      roughCanvas.rectangle(0, 0, this.width, this.height, {
        fill: this.color,
        fillStyle: this.fillStyle, // Use the fillStyle prop
        stroke: "black",
      });
    },
  },
  computed: {
    containerStyle() {
      return {
        position: "absolute",
        top: `${this.y}px`,
        left: `${this.x}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      };
    },
    textStyle() {
      return {
        position: "absolute",
        color: this.textColor,
        fontSize: this.fontSize,
        fontWeight: this.fontWeight,
        fontFamily: this.fontFamily,
        pointerEvents: "none", // Prevent text from interfering with mouse events
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

.rectangle-container {
  position: relative;
}

.rectangle-text {
  position: absolute;
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Patrick Hand', cursive; /* Hand-drawn style font */
  pointer-events: none; /* Prevent text from interfering with mouse events */
}
</style>