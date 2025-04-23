<template>
  <div
    class="circle-container"
    :style="containerStyle"
  >
    <canvas ref="canvas"></canvas>
    <span
      v-if="text"
      class="circle-text"
      :style="textStyle"
    >
      {{ text }}
    </span>
  </div>
</template>

<script>
import rough from "roughjs/bundled/rough.esm.js";

export default {
  name: "RoughCircle",
  props: {
    size: {
      type: Number,
      default: 100, // Default diameter of the circle in pixels
    },
    color: {
      type: String,
      default: "#3498db", // Default circle color
    },
    fillStyle: {
      type: String,
      default: "hachure", // Default fill style
      validator: (value) =>
        ["hachure", "solid", "zigzag", "cross-hatch", "dots", "dashed", "zigzag-line"].includes(value),
    },
    text: {
      type: String,
      default: "", // Optional text inside the circle
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
      default: 0, // X position of the circle
    },
    y: {
      type: Number,
      default: 0, // Y position of the circle
    },
  },
  mounted() {
    this.drawCircle();
  },
  methods: {
    drawCircle() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const roughCanvas = rough.canvas(canvas);

      // Set canvas size
      canvas.width = this.size;
      canvas.height = this.size;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the rough circle with the specified fill style
      roughCanvas.circle(this.size / 2, this.size / 2, this.size, {
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
        width: `${this.size}px`,
        height: `${this.size}px`,
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

.circle-container {
  position: relative;
}
</style>