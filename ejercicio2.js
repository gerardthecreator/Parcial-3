const ejercicio2 = {
  title: "Análisis por Combustión: Fórmulas Empírica y Molecular",
  problem: `
        <p class="content-block__body">
            La prevalencia del hábito de fumar, causante de más de 120.000 muertes al año, puede explicarse, al menos parcialmente, por el contenido de nicotina ($C_{10}H_{14}N_2$), un alcaloide compuesto exclusivamente por carbono, hidrógeno y nitrógeno. Al quemar completamente una muestra de 81 mg de nicotina se produjeron 220 mg de $CO_2$ y 66.5 mg de $H_2O$.
        </p>
        <ul style="list-style-type: lower-alpha; padding-left: 2rem; font-size: 1.1rem;">
            <li>Calcule la composición centesimal de la nicotina.</li>
            <li>Determine la fórmula empírica de la nicotina.</li>
            <li>Determine la fórmula molecular, sabiendo que el peso molecular, aproximado, de la nicotina es 160 g/mol.</li>
        </ul>
        <br>
        <p class="content-block__body">
            <b>Datos de Masas Atómicas:</b> C = 12.01 g/mol; H = 1.008 g/mol; N = 14.01 g/mol; O = 16.00 g/mol.
        </p>
    `,
  solution: `
        <ol style="list-style-type: lower-alpha; padding-left: 2rem; font-size: 1.1rem; line-height: 2;">
            <li><b>Composición Centesimal:</b>
                <ul>
                    <li>% Carbono = $74.04 \\%$</li>
                    <li>% Hidrógeno = $9.19 \\%$</li>
                    <li>% Nitrógeno = $16.77 \\%$</li>
                </ul>
            </li>
            <li><b>Fórmula Empírica:</b> $C_5H_7N$</li>
            <li><b>Fórmula Molecular:</b> $C_{10}H_{14}N_2$</li>
        </ol>
    `,
  explanation: [
    `<strong>Recopilación de Datos y Conversión.</strong> Lo primero es organizar los datos y trabajar en unidades consistentes (gramos).
         <ul>
             <li>Masa de la muestra (Nicotina): $81 \\text{ mg} = 0.081 \\text{ g}$</li>
             <li>Masa de $CO_2$ producida: $220 \\text{ mg} = 0.220 \\text{ g}$</li>
             <li>Masa de $H_2O$ producida: $66.5 \\text{ mg} = 0.0665 \\text{ g}$</li>
         </ul>
         Calculamos las masas molares de los productos:
         <ul>
            <li>Masa Molar $CO_2 = 12.01 + 2 \times 16.00 = 44.01 \\text{ g/mol}$</li>
            <li>Masa Molar $H_2O = 2 \times 1.008 + 16.00 = 18.016 \\text{ g/mol}$</li>
         </ul>`,
    
    `<strong>Calcular la masa de Carbono (C).</strong> Todo el carbono de la muestra de nicotina se convierte en $CO_2$. Usamos la estequiometría para encontrar la masa de C a partir de la masa de $CO_2$.
        <br> $$ \\text{masa } C = 0.220 \\text{ g } CO_2 \\times \\frac{12.01 \\text{ g } C}{44.01 \\text{ g } CO_2} = 0.0600 \\text{ g } C $$`,
    
    `<strong>Calcular la masa de Hidrógeno (H).</strong> De manera similar, todo el hidrógeno de la muestra se convierte en $H_2O$.
        <br> $$ \\text{masa } H = 0.0665 \\text{ g } H_2O \\times \\frac{2 \\times 1.008 \\text{ g } H}{18.016 \\text{ g } H_2O} = 0.00744 \\text{ g } H $$`,
    
    `<strong>Calcular la masa de Nitrógeno (N).</strong> La nicotina solo contiene C, H y N. Por tanto, podemos hallar la masa de nitrógeno por diferencia.
        <br> $$ \\text{masa } N = \\text{Masa total} - \\text{masa } C - \\text{masa } H $$
        $$ \\text{masa } N = 0.081 \\text{ g} - 0.0600 \\text{ g} - 0.00744 \\text{ g} = 0.01356 \\text{ g } N $$`,
    
    `<strong>a) Calcular la Composición Centesimal.</strong> Ahora que tenemos la masa de cada elemento en la muestra original, calculamos su porcentaje.
        <ul>
            <li>$\\mathbf{\\% C} = \\frac{0.0600 \\text{ g}}{0.081 \\text{ g}} \\times 100 = \\mathbf{74.04 \\%}$</li>
            <li>$\\mathbf{\\% H} = \\frac{0.00744 \\text{ g}}{0.081 \\text{ g}} \\times 100 = \\mathbf{9.19 \\%}$</li>
            <li>$\\mathbf{\\% N} = \\frac{0.01356 \\text{ g}}{0.081 \\text{ g}} \\times 100 = \\mathbf{16.74 \\%}$</li>
        </ul>
        (La suma es $99.97\\%$, ¡muy cerca de 100%!)`,
    
    `<strong>Convertir masas a moles.</strong> Para encontrar la fórmula empírica, necesitamos la relación molar de los elementos.
        <ul>
            <li>$\\text{moles C} = \\frac{0.0600 \\text{ g}}{12.01 \\text{ g/mol}} = 0.004996 \\text{ mol}$</li>
            <li>$\\text{moles H} = \\frac{0.00744 \\text{ g}}{1.008 \\text{ g/mol}} = 0.00738 \\text{ mol}$</li>
            <li>$\\text{moles N} = \\frac{0.01356 \\text{ g}}{14.01 \\text{ g/mol}} = 0.000968 \\text{ mol}$</li>
        </ul>`,
    
    `<strong>b) Determinar la Fórmula Empírica.</strong> Dividimos todos los moles por el valor más pequeño (moles de N) para encontrar la relación de números enteros más simple.
        <ul>
            <li>$C: \\frac{0.004996}{0.000968} \\approx 5.16 \\approx \\mathbf{5}$</li>
            <li>$H: \\frac{0.00738}{0.000968} \\approx 7.62 \\approx \\mathbf{7}$</li>
            <li>$N: \\frac{0.000968}{0.000968} = \\mathbf{1}$</li>
        </ul>
        <em>Nota: Los valores no son enteros perfectos (especialmente para H), lo cual es común con datos experimentales. Redondeamos al entero más cercano. La proporción es 5:7:1.</em>
        <br> La fórmula empírica es: $\\mathbf{C_5H_7N}$.`,
    
    `<strong>c) Determinar la Fórmula Molecular.</strong> Comparamos la masa de la fórmula empírica con la masa molecular dada.
         <ol>
            <li>Calcular masa de la fórmula empírica ($C_5H_7N$):<br>
                $$(5 \\times 12.01) + (7 \\times 1.008) + (1 \\times 14.01) = 60.05 + 7.056 + 14.01 = 81.116 \\text{ g/mol}$$</li>
            <li>Encontrar el factor multiplicador (n):<br>
                $$ n = \\frac{\\text{Masa Molecular}}{\\text{Masa Empírica}} = \\frac{160 \\text{ g/mol}}{81.116 \\text{ g/mol}} \\approx 1.97 \\approx \\mathbf{2}$$</li>
            <li>Multiplicar la fórmula empírica por n:<br>
                $$(C_5H_7N)_2 = \\mathbf{C_{10}H_{14}N_2}$$</li>
         </ol>
         ¡Esta es la fórmula molecular de la nicotina, que coincide con la proporcionada en el problema!`
  ],
  /**
   * Dibuja un diagrama de flujo del proceso de análisis por combustión.
   */
  drawGraph: function(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#000';
    ctx.font = `bold ${w * 0.03}px Oswald`;
    ctx.textAlign = 'center';
    
    // Función para dibujar una caja con texto
    const drawBox = (x, y, width, height, text) => {
      ctx.fillStyle = '#1f2937';
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, width, height, 8);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#FFF';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x + width / 2, y + height / 2);
    };
    
    // Función para dibujar una flecha
    const drawArrow = (fromX, fromY, toX, toY) => {
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.strokeStyle = '#9ca3af';
      ctx.lineWidth = 3;
      ctx.stroke();
      const angle = Math.atan2(toY - fromY, toX - fromX);
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - 10 * Math.cos(angle - Math.PI / 6), toY - 10 * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - 10 * Math.cos(angle + Math.PI / 6), toY - 10 * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fillStyle = '#9ca3af';
      ctx.fill();
    };
    
    const boxW = w * 0.22;
    const boxH = h * 0.2;
    
    // Muestra -> Combustión -> Productos
    drawBox(w * 0.05, h * 0.4, boxW, boxH, 'Nicotina (81mg)');
    drawArrow(w * 0.05 + boxW, h * 0.5, w * 0.38, h * 0.5);
    ctx.fillStyle = '#f59e0b';
    ctx.font = `bold ${w * 0.035}px Anton`;
    ctx.fillText('Combustión (+O₂)', w * 0.315, h * 0.4);
    
    drawBox(w * 0.38, h * 0.2, boxW, boxH, 'CO₂ (220mg)');
    drawBox(w * 0.38, h * 0.6, boxW, boxH, 'H₂O (66.5mg)');
    
    // Productos -> Masas de elementos
    drawArrow(w * 0.38 + boxW, h * 0.3, w * 0.72, h * 0.3);
    drawArrow(w * 0.38 + boxW, h * 0.7, w * 0.72, h * 0.5);
    
    drawBox(w * 0.72, h * 0.2, boxW, boxH, 'Masa C');
    drawBox(w * 0.72, h * 0.5, boxW, boxH, 'Masa H');
    
    // Ley de Conservación de la Masa para el N
    ctx.font = `bold ${w * 0.03}px Oswald`;
    drawBox(w * 0.72, h * 0.8, boxW, boxH, 'Masa N (por resta)');
    
    // Unión final (implícita) hacia el resultado
    ctx.fillStyle = '#10b981';
    ctx.font = `bold ${w * 0.04}px Anton`;
    ctx.fillText('FÓRMULAS EMPÍRICA Y MOLECULAR', w / 2, h * 0.08);
  }
};