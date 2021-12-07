var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
/*!
* vue3-sketch-ruler v1.2.3
* 2021年12月Tue Dec 07 2021 10:55:24 GMT+0800 (中国标准时间)
* 制作
*/
import { defineComponent, ref, onMounted, computed, withDirectives, openBlock, createElementBlock, normalizeStyle, createElementVNode, toDisplayString, vShow, reactive, watch, resolveComponent, normalizeClass, createVNode, Fragment, renderList, createBlock } from "vue";
const lineProps = {
  scale: Number,
  thick: Number,
  palette: Object,
  index: Number,
  start: Number,
  vertical: Boolean,
  value: Number,
  isShowReferLine: Boolean
};
var rulerLine_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$3 = defineComponent({
  name: "LineRuler",
  props: lineProps,
  emits: ["onMouseDown", "onRelease", "onRemove"],
  setup(props, { emit }) {
    const startValue = ref(0);
    const showLine = ref(true);
    onMounted(() => {
      startValue.value = props.value;
    });
    const setShowLine = (offset2) => {
      showLine.value = offset2 >= 0;
    };
    const offset = computed(() => {
      const offset2 = (startValue.value - props.start) * props.scale;
      setShowLine(offset2);
      const positionValue = offset2 + "px";
      const position = props.vertical ? { top: positionValue } : { left: positionValue };
      return position;
    });
    const borderCursor = computed(() => {
      var _a;
      const borderValue = `1px solid ${(_a = props.palette) == null ? void 0 : _a.lineColor}`;
      const border = props.vertical ? { borderTop: borderValue } : { borderLeft: borderValue };
      const cursorValue = props.isShowReferLine ? props.vertical ? "ns-resize" : "ew-resize" : "none";
      return __spreadValues({
        cursor: cursorValue
      }, border);
    });
    const actionStyle = computed(() => {
      const actionStyle2 = props.vertical ? { left: props.thick + "px" } : { top: props.thick + "px" };
      return actionStyle2;
    });
    const handleDown = (e) => {
      const startD = props.vertical ? e.clientY : e.clientX;
      const initValue = startValue.value;
      emit("onMouseDown");
      const onMove = (e2) => {
        const currentD = props.vertical ? e2.clientY : e2.clientX;
        const newValue = Math.round(initValue + (currentD - startD) / props.scale);
        startValue.value = newValue;
      };
      const onEnd = () => {
        emit("onRelease", startValue.value, props.index);
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onEnd);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
    };
    const handleRemove = () => {
      emit("onRemove", props.index);
    };
    return {
      startValue,
      showLine,
      offset,
      borderCursor,
      actionStyle,
      handleDown,
      handleRemove
    };
  }
});
const _hoisted_1$2 = { class: "value" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "line",
    style: normalizeStyle([_ctx.offset, _ctx.borderCursor]),
    onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.handleDown && _ctx.handleDown(...args))
  }, [
    createElementVNode("div", {
      class: "action",
      style: normalizeStyle(_ctx.actionStyle)
    }, [
      createElementVNode("span", {
        class: "del",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleRemove && _ctx.handleRemove(...args))
      }, "\xD7"),
      createElementVNode("span", _hoisted_1$2, toDisplayString(_ctx.startValue), 1)
    ], 4)
  ], 36)), [
    [vShow, _ctx.showLine]
  ]);
}
var RulerLine = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-069c473f"]]);
const getGridSize = (scale) => {
  if (scale <= 0.25)
    return 40;
  if (scale <= 0.5)
    return 20;
  if (scale <= 1)
    return 10;
  if (scale <= 2)
    return 5;
  if (scale <= 4)
    return 2;
  return 1;
};
const FONT_SCALE = 0.83;
const drawCavaseRuler = (ctx, start, selectStart, selectLength, options, h) => {
  const { scale, width, height, ratio, palette } = options;
  const { bgColor, fontColor, shadowColor, longfgColor, shortfgColor } = palette;
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  if (selectLength) {
    const shadowX = (selectStart - start) * scale;
    const shadowWidth = selectLength * scale;
    ctx.fillStyle = shadowColor;
    h ? ctx.fillRect(shadowX, 0, shadowWidth, height * 3 / 8) : ctx.fillRect(0, shadowX, width * 3 / 8, shadowWidth);
  }
  const gridSize = getGridSize(scale);
  const gridPixel = gridSize * scale;
  const gridSize10 = gridSize * 10;
  const gridPixel10 = gridSize10 * scale;
  const startValue = Math.floor(start / gridSize) * gridSize;
  const startValue10 = Math.floor(start / gridSize10) * gridSize10;
  const offsetX = (startValue - start) / gridSize * gridPixel;
  const offsetX10 = (startValue10 - start) / gridSize10 * gridPixel10;
  const endValue = start + Math.ceil((h ? width : height) / scale);
  ctx.beginPath();
  ctx.fillStyle = fontColor;
  ctx.strokeStyle = longfgColor;
  for (let value = startValue10, count = 0; value < endValue; value += gridSize10, count++) {
    const x = offsetX10 + count * gridPixel10 + 0.5;
    h ? ctx.moveTo(x, 0) : ctx.moveTo(0, x);
    ctx.save();
    h ? ctx.translate(x, height * 0.4) : ctx.translate(width * 0.4, x);
    if (!h) {
      ctx.rotate(-Math.PI / 2);
    }
    ctx.scale(FONT_SCALE / ratio, FONT_SCALE / ratio);
    ctx.fillText(value.toString(), 4 * ratio, 7 * ratio);
    ctx.restore();
    h ? ctx.lineTo(x, height * 9 / 16) : ctx.lineTo(width * 9 / 16, x);
  }
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = shortfgColor;
  for (let value = startValue, count = 0; value < endValue; value += gridSize, count++) {
    const x = offsetX + count * gridPixel + 0.5;
    h ? ctx.moveTo(x, 0) : ctx.moveTo(0, x);
    if (value % gridSize10 !== 0) {
      h ? ctx.lineTo(x, height * 1 / 4) : ctx.lineTo(width * 1 / 4, x);
    }
  }
  ctx.stroke();
  ctx.closePath();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
};
const canvasProps = {
  showIndicator: Boolean,
  valueNum: Number,
  scale: Number,
  ratio: Number,
  palette: Object,
  vertical: Boolean,
  start: Number,
  width: Number,
  height: Number,
  selectStart: Number,
  selectLength: Number
};
const _sfc_main$2 = defineComponent({
  name: "CanvasRuler",
  props: canvasProps,
  emits: ["onAddLine", "update:showIndicator", "update:valueNum"],
  setup(props, { emit }) {
    const state = reactive({
      canvasContext: null
    });
    let ratio = 1;
    const canvas = ref(null);
    onMounted(() => {
      ratio = props.ratio || window.devicePixelRatio || 1;
      initCanvasRef();
      updateCanvasContext(ratio);
      drawRuler(ratio);
    });
    const initCanvasRef = () => {
      state.canvasContext = canvas.value && canvas.value.getContext("2d");
    };
    const updateCanvasContext = (ratio2) => {
      if (canvas.value) {
        canvas.value.width = props.width * ratio2;
        canvas.value.height = props.height * ratio2;
        const ctx = state.canvasContext;
        if (ctx) {
          ctx.font = `${12 * ratio2}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`;
          ctx.lineWidth = 1;
          ctx.textBaseline = "middle";
        }
      }
    };
    const drawRuler = (ratio2) => {
      const options = {
        scale: props.scale,
        width: props.width,
        height: props.height,
        palette: props.palette,
        ratio: ratio2
      };
      if (state.canvasContext) {
        drawCavaseRuler(state.canvasContext, props.start, props.selectStart, props.selectLength, options, !props.vertical);
      }
    };
    watch(() => props.start, () => drawRuler(ratio));
    watch([() => props.width, () => props.height], () => {
      updateCanvasContext(ratio);
      drawRuler(ratio);
    });
    const handle = (e, key) => {
      const getValueByOffset = (offset2, start, scale) => Math.round(start + offset2 / scale);
      const offset = props.vertical ? e.offsetY : e.offsetX;
      const value = getValueByOffset(offset, props.start, props.scale);
      switch (key) {
        case "click":
          emit("onAddLine", value);
          break;
        case "enter":
          emit("update:valueNum", value);
          emit("update:showIndicator", true);
          break;
        default:
          emit("update:valueNum", value);
          break;
      }
    };
    return {
      handle,
      canvas
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("canvas", {
    ref: "canvas",
    class: "ruler",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handle($event, "click")),
    onMouseenter: _cache[1] || (_cache[1] = ($event) => _ctx.handle($event, "enter")),
    onMousemove: _cache[2] || (_cache[2] = ($event) => _ctx.handle($event, "move")),
    onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("update:showIndicator", false))
  }, null, 544);
}
var CanvasRuler = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const wrapperProps = {
  scale: Number,
  ratio: Number,
  thick: Number,
  palette: Object,
  vertical: {
    type: Boolean,
    default: true
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 200
  },
  start: {
    type: Number,
    default: 0
  },
  lines: {
    type: Array,
    default: () => []
  },
  selectStart: {
    type: Number
  },
  selectLength: {
    type: Number
  },
  isShowReferLine: {
    type: Boolean
  }
};
var rulerWrapper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  name: "RulerWrapper",
  components: {
    CanvasRuler,
    RulerLine
  },
  props: wrapperProps,
  setup(props) {
    const showIndicator = ref(false);
    const valueNum = ref(0);
    const rwClassName = computed(() => {
      const className = props.vertical ? "v-container" : "h-container";
      return className;
    });
    const rwStyle = computed(() => {
      const hContainer = {
        width: `calc(100% - ${props.thick}px)`,
        height: `${props.thick + 1}px`,
        left: `${props.thick}px`
      };
      const vContainer = {
        width: `${props.thick && props.thick + 1}px`,
        height: `calc(100% - ${props.thick}px)`,
        top: `${props.thick}px`
      };
      return props.vertical ? vContainer : hContainer;
    });
    const indicatorStyle = computed(() => {
      var _a;
      const indicatorOffset = (valueNum.value - props.start) * props.scale;
      let positionKey = "top";
      let boderKey = "borderLeft";
      positionKey = props.vertical ? "top" : "left";
      boderKey = props.vertical ? "borderBottom" : "borderLeft";
      return {
        [positionKey]: indicatorOffset + "px",
        [boderKey]: `1px solid ${(_a = props.palette) == null ? void 0 : _a.lineColor}`
      };
    });
    const handleNewLine = (value) => {
      props.lines.push(value);
    };
    const handleLineRelease = (value, index) => {
      const offset = value - props.start;
      const maxOffset = (props.vertical ? props.height : props.width) / props.scale;
      if (offset < 0 || offset > maxOffset) {
        handleLineRemove(index);
      } else {
        props.lines[index] = value;
      }
    };
    const handleLineRemove = (index) => {
      props.lines.splice(index, 1);
    };
    return {
      showIndicator,
      valueNum,
      rwClassName,
      rwStyle,
      indicatorStyle,
      handleNewLine,
      handleLineRelease,
      handleLineRemove
    };
  }
});
const _hoisted_1$1 = { class: "lines" };
const _hoisted_2 = { class: "value" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CanvasRuler = resolveComponent("CanvasRuler");
  const _component_RulerLine = resolveComponent("RulerLine");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.rwClassName),
    style: normalizeStyle(_ctx.rwStyle)
  }, [
    createVNode(_component_CanvasRuler, {
      vertical: _ctx.vertical,
      scale: _ctx.scale,
      width: _ctx.width,
      height: _ctx.height,
      start: _ctx.start,
      ratio: _ctx.ratio,
      "select-start": _ctx.selectStart,
      "select-length": _ctx.selectLength,
      palette: _ctx.palette,
      valueNum: _ctx.valueNum,
      "onUpdate:valueNum": _cache[0] || (_cache[0] = ($event) => _ctx.valueNum = $event),
      showIndicator: _ctx.showIndicator,
      "onUpdate:showIndicator": _cache[1] || (_cache[1] = ($event) => _ctx.showIndicator = $event),
      onOnAddLine: _ctx.handleNewLine
    }, null, 8, ["vertical", "scale", "width", "height", "start", "ratio", "select-start", "select-length", "palette", "valueNum", "showIndicator", "onOnAddLine"]),
    withDirectives(createElementVNode("div", _hoisted_1$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.lines, (v, i) => {
        return openBlock(), createBlock(_component_RulerLine, {
          key: v + i,
          index: i,
          value: v >> 0,
          scale: _ctx.scale,
          start: _ctx.start,
          thick: _ctx.thick,
          palette: _ctx.palette,
          vertical: _ctx.vertical,
          "is-show-refer-line": _ctx.isShowReferLine,
          onOnRemove: _ctx.handleLineRemove,
          onOnRelease: _ctx.handleLineRelease
        }, null, 8, ["index", "value", "scale", "start", "thick", "palette", "vertical", "is-show-refer-line", "onOnRemove", "onOnRelease"]);
      }), 128))
    ], 512), [
      [vShow, _ctx.isShowReferLine]
    ]),
    withDirectives(createElementVNode("div", {
      class: "indicator",
      style: normalizeStyle(_ctx.indicatorStyle)
    }, [
      createElementVNode("div", _hoisted_2, toDisplayString(_ctx.valueNum), 1)
    ], 4), [
      [vShow, _ctx.showIndicator]
    ])
  ], 6);
}
var RulerWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-adb71e78"]]);
const sketchRulerProps = {
  scale: {
    type: Number,
    default: 1
  },
  ratio: {
    type: Number
  },
  thick: {
    type: Number,
    default: 16
  },
  palette: Object,
  startX: {
    type: Number
  },
  startY: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 200
  },
  shadow: {
    type: Object,
    default: () => {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
  },
  lines: {
    type: Object,
    default: () => {
      return {
        h: [],
        v: []
      };
    }
  },
  cornerActive: {
    type: Boolean,
    default: false
  },
  isShowReferLine: {
    type: Boolean,
    default: true
  }
};
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "SketchRule",
  components: {
    RulerWrapper
  },
  props: sketchRulerProps,
  emits: ["onCornerClick", "handleLine"],
  setup(props, { emit }) {
    const paletteCpu = computed(() => {
      function merge(obj, o) {
        Object.keys(obj).forEach((key) => {
          if (key && obj.hasOwnProperty(key)) {
            if (typeof o["key"] === "object") {
              obj[key] = merge(obj[key], o[key]);
            } else if (o.hasOwnProperty(key)) {
              obj[key] = o[key];
            }
          }
        });
        return obj;
      }
      const finalObj = merge({
        bgColor: "rgba(225,225,225, 0)",
        longfgColor: "#BABBBC",
        shortfgColor: "#C8CDD0",
        fontColor: "#7D8694",
        shadowColor: "#E8E8E8",
        lineColor: "#EB5648",
        borderColor: "#DADADC",
        cornerActiveColor: "rgb(235, 86, 72, 0.6)",
        menu: {
          bgColor: "#fff",
          dividerColor: "#DBDBDB",
          listItem: {
            textColor: "#415058",
            hoverTextColor: "#298DF8",
            disabledTextColor: "rgba(65, 80, 88, 0.4)",
            bgColor: "#fff",
            hoverBgColor: "#F2F2F2"
          }
        }
      }, props.palette || {});
      return finalObj;
    });
    const cornerActiveClass = computed(() => {
      return props.cornerActive ? " active" : "";
    });
    const cornerStyle = computed(() => {
      return {
        backgroundColor: paletteCpu.value.bgColor,
        width: props.thick + "px",
        height: props.thick + "px",
        borderRight: `1px solid ${paletteCpu.value.borderColor}`,
        borderBottom: `1px solid ${paletteCpu.value.borderColor}`
      };
    });
    const onCornerClick = (e) => {
      emit("onCornerClick", e);
    };
    return {
      paletteCpu,
      cornerActiveClass,
      cornerStyle,
      onCornerClick
    };
  }
});
const _hoisted_1 = {
  id: "mb-ruler",
  class: "style-ruler mb-ruler"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RulerWrapper = resolveComponent("RulerWrapper");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_RulerWrapper, {
      vertical: false,
      width: _ctx.width,
      height: _ctx.thick,
      "is-show-refer-line": _ctx.isShowReferLine,
      thick: _ctx.thick,
      ratio: _ctx.ratio,
      start: _ctx.startX,
      lines: _ctx.lines.h,
      "select-start": _ctx.shadow.x,
      "select-length": _ctx.shadow.width,
      scale: _ctx.scale,
      palette: _ctx.paletteCpu
    }, null, 8, ["width", "height", "is-show-refer-line", "thick", "ratio", "start", "lines", "select-start", "select-length", "scale", "palette"]),
    createVNode(_component_RulerWrapper, {
      vertical: true,
      width: _ctx.thick,
      height: _ctx.height,
      "is-show-refer-line": _ctx.isShowReferLine,
      thick: _ctx.thick,
      ratio: _ctx.ratio,
      start: _ctx.startY,
      lines: _ctx.lines.v,
      "select-start": _ctx.shadow.y,
      "select-length": _ctx.shadow.height,
      scale: _ctx.scale,
      palette: _ctx.paletteCpu
    }, null, 8, ["width", "height", "is-show-refer-line", "thick", "ratio", "start", "lines", "select-start", "select-length", "scale", "palette"]),
    createElementVNode("a", {
      class: normalizeClass(["corner", _ctx.cornerActiveClass]),
      style: normalizeStyle(_ctx.cornerStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onCornerClick && _ctx.onCornerClick(...args))
    }, null, 6)
  ]);
}
var SketchRule = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
SketchRule.install = (app) => {
  app.component(SketchRule.name, SketchRule);
};
export { SketchRule, SketchRule as default };
