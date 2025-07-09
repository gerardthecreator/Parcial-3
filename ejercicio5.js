const ejercicio5 = {
  title: "Estequiometría: Cálculo de Reactivo por Exceso Restante",
  problem: `
        <p class="content-block__body">
            Una pequeña pieza de zinc se disuelve en 50.00 mL de una disolución de ácido clorhídrico 1.035 M. La reacción forma cloruro de zinc ($ZnCl_2$) e hidrógeno molecular ($H_2$).
        </p>
        <p class="content-block__body">
            Cuando la reacción termina, se mide la concentración del ácido clorhídrico restante en la disolución, cuyo volumen final ahora es 60.00 mL, resultando ser 0.812 M.
        </p>
        <p class="content-block__body" style="font-size: 1.1rem; margin-top: 1rem;">
            <b>¿Cuál debe haber sido la masa de la pieza de zinc disuelta?</b>
        </p>
        <em style="font-size: 0.9rem; color: #f59e0b;">*Nota: La redacción original ha sido clarificada para asumir que el volumen final de la disolución es 60.00 mL y su molaridad de HCl es 0.812 M.*</em>
    `,
  solution: `
        La masa de la pieza de zinc disuelta fue de:
        <div style="font-size: 1.8rem; text-align:center; color: #10b981; margin: 1rem 0;">
            $\\mathbf{0.0991 \\text{ g}}$
        </div>
    `,
  explanation: [
    `<strong>Paso 1: Escribir y balancear la ecuación química.</strong> Es el primer paso para cualquier cálculo estequiométrico.
         <br> La reacción entre zinc metálico y ácido clorhídrico es:
         <div style="text-align:center; font-size:1.3rem; color:#facc15; margin:0.5rem 0;">$Zn_{(s)} + 2HCl_{(ac)} \\rightarrow ZnCl_{2(ac)} + H_{2(g)}$</div>
         La ecuación ya está balanceada. La relación clave es: <strong>1 mol de Zn reacciona con 2 moles de HCl</strong>.`,
    
    `<strong>Paso 2: Calcular los moles iniciales de HCl.</strong> Usamos la fórmula de molaridad (M = n/V) para encontrar los moles de HCl disponibles al principio.
         <ul>
            <li>Volumen inicial = $50.00 \\text{ mL} = 0.05000 \\text{ L}$</li>
            <li>Molaridad inicial = $1.035 \\text{ mol/L}$</li>
         </ul>
         $$ \\text{Moles iniciales HCl} = 1.035 \\frac{\\text{mol}}{L} \\times 0.05000 \\text{ L} = \\mathbf{0.05175 \\text{ mol}} $$`,
    
    `<strong>Paso 3: Calcular los moles finales de HCl (exceso).</strong> De manera similar, calculamos cuántos moles de HCl quedaron en la disolución sin reaccionar.
         <ul>
            <li>Volumen final = $60.00 \\text{ mL} = 0.06000 \\text{ L}$</li>
            <li>Molaridad final = $0.812 \\text{ mol/L}$</li>
         </ul>
         $$ \\text{Moles finales HCl} = 0.812 \\frac{\\text{mol}}{L} \\times 0.06000 \\text{ L} = \\mathbf{0.04872 \\text{ mol}} $$`,
    
    `<strong>Paso 4: Calcular los moles de HCl que reaccionaron.</strong> La diferencia entre los moles iniciales y los moles finales nos da exactamente la cantidad de HCl que fue consumida por el zinc.
         <br> $$ \\text{Moles HCl consumidos} = \\text{Moles iniciales} - \\text{Moles finales} $$
         $$ \\text{Moles HCl consumidos} = 0.05175 \\text{ mol} - 0.04872 \\text{ mol} = \\mathbf{0.00303 \\text{ mol}} $$`,
    
    `<strong>Paso 5: Calcular los moles de Zn que reaccionaron.</strong> Usamos la estequiometría de la ecuación balanceada para convertir los moles de HCl consumidos a moles de Zn.
         <br> $$ 0.00303 \\text{ mol HCl} \\times \\frac{1 \\text{ mol Zn}}{2 \\text{ mol HCl}} = \\mathbf{0.001515 \\text{ mol Zn}} $$`,
    
    `<strong>Paso 6: Convertir moles de Zn a masa.</strong> Finalmente, usamos la masa molar del zinc (Zn = 65.390 g/mol) para encontrar la masa de la pieza original.
         <br> $$ \\text{Masa de Zn} = 0.001515 \\text{ mol} \\times 65.390 \\frac{\\text{g}}{\\text{mol}} $$
         $$ \\text{Masa de Zn} = \\mathbf{0.09907 \\text{ g}} $$
         Redondeando a tres cifras significativas (según los datos de molaridad), el resultado es 0.0991 g.`
  ],
  /**
   * Dibuja un esquema de la situación antes y después de la reacción.
   */
  drawGraph: function(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    ctx.textAlign = 'center';
    
    const drawSetup = (x, title, molarity, volume, hasZinc, hasBubbles) => {
      ctx.font = `bold ${w * 0.045}px Anton`;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(title, x, h * 0.1);
      
      const beakerX = x;
      const beakerY = h * 0.25;
      const beakerW = w * 0.35;
      const beakerH = h * 0.6;
      
      // Dibuja el vaso
      ctx.strokeStyle = '#d1d5db';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(beakerX - beakerW / 2, beakerY);
      ctx.lineTo(beakerX - beakerW / 2, beakerY + beakerH);
      ctx.ellipse(beakerX, beakerY + beakerH, beakerW / 2, beakerW / 10, 0, Math.PI, 2 * Math.PI, true);
      ctx.lineTo(beakerX + beakerW / 2, beakerY);
      ctx.stroke();
      
      // Líquido
      ctx.fillStyle = '#ef444466'; // Rojo translúcido para el ácido
      ctx.beginPath();
      ctx.ellipse(beakerX, beakerY + beakerH / 3, beakerW / 2, beakerW / 10, 0, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillRect(beakerX - beakerW / 2 + 1.5, beakerY + beakerH / 3, beakerW - 3, beakerH - beakerH / 3 - beakerW / 10 + 1.5);
      
      // Pieza de Zinc
      if (hasZinc) {
        ctx.fillStyle = '#9ca3af';
        ctx.beginPath();
        ctx.moveTo(beakerX - 20, beakerY + beakerH - 25);
        ctx.lineTo(beakerX, beakerY + beakerH - 45);
        ctx.lineTo(beakerX + 25, beakerY + beakerH - 20);
        ctx.lineTo(beakerX + 10, beakerY + beakerH - 5);
        ctx.closePath();
        ctx.fill();
      }
      
      // Burbujas (H2)
      if (hasBubbles) {
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.arc(beakerX + (Math.random() - 0.5) * 30, beakerY + beakerH / 2 + Math.random() * 20, Math.random() * 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
      
      // Etiquetas de texto
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${w * 0.03}px Oswald`;
      ctx.fillText(molarity, x, h * 0.9);
      ctx.font = `normal ${w * 0.025}px Oswald`;
      ctx.fillText(volume, x, h * 0.95);
    };
    
    // Antes
    drawSetup(w * 0.25, 'ANTES', '1.035 M HCl', '50.00 mL', true, false);
    
    // Flecha
    ctx.font = `bold ${w * 0.08}px Oswald`;
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('→', w * 0.5, h * 0.55);
    
    // Después
    drawSetup(w * 0.75, 'DESPUÉS', '0.812 M HCl', '60.00 mL', false, true);
  }
};