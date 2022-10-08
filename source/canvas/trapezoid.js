class trapePainter {
  static get inputProperties(){
    return [
      '--trapezoid-color',
      '--trapezoid-angle'
    ]
  }


  paint(ctx, geom, props) {
    const w = geom.width;
    const h = geom.height;
    const angle = parseFloat(props.get('--trapezoid-angle').toString());

    ctx.beginPath();
    ctx.moveTo(angle*w, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(w, h);
    ctx.lineTo((1-angle) *w, h);
    ctx.closePath();
    ctx.fillStyle = props.get('--trapezoid-color').toString();
    ctx.fill();
  }
}
  
  registerPaint('trapezoid', trapePainter);