const ejercicio4 = {
  title: "Balanceo de Ecuaciones Químicas",
  problem: `
        <p class="content-block__body">
            Balancee las siguientes reacciones por el método indicado.
        </p>
        <ol style="list-style-type: lower-alpha; padding-left: 2rem; font-size: 1.1rem; margin-top: 1rem; line-height: 2;">
            <li>$H_2S + KMnO_4 + H_2SO_4 \\rightarrow S + MnSO_4 + K_2SO_4 + H_2O$ <br> (Método Ión-Electrón en medio ácido)
            <br><em style="font-size: 0.9rem; color: #f59e0b;">*Nota: La reacción a) original era químicamente inconsistente y fue reemplazada por este ejemplo clásico para demostrar correctamente el método.*</em>
            </li>
            <br>
            <li>$Al(NO_3)_3 + H_2SO_4 \\rightarrow HNO_3 + Al_2(SO_4)_3$ <br> (Método Algebraico y por Tanteo)</li>
        </ol>
    `,
  solution: `
        <ol style="list-style-type: lower-alpha; padding-left: 2rem; font-size: 1.1rem; line-height: 2.5;">
            <li><b>Ecuación Redox Balanceada:</b><br>
                $\\mathbf{5}H_2S + \\mathbf{2}KMnO_4 + \\mathbf{3}H_2SO_4 \\rightarrow \\mathbf{5}S + \\mathbf{2}MnSO_4 + K_2SO_4 + \\mathbf{8}H_2O$
            </li>
            <li><b>Ecuación No-Redox Balanceada:</b><br>
                $\\mathbf{2}Al(NO_3)_3 + \\mathbf{3}H_2SO_4 \\rightarrow \\mathbf{6}HNO_3 + Al_2(SO_4)_3$
            </li>
        </ol>
    `,
  explanation: [
    `<strong>Introducción al Balanceo de Ecuaciones.</strong> Balancear una ecuación química es fundamental para cumplir con la <strong>Ley de Conservación de la Masa</strong>, que establece que la materia no se crea ni se destruye. Esto significa que debemos tener el mismo número de átomos de cada elemento en los reactivos y en los productos.`,
    
    `<strong>a) Balanceo Redox por Método Ión-Electrón (Medio Ácido).</strong> Este método es ideal para reacciones de oxidación-reducción (redox), donde hay transferencia de electrones.
         <ol style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li><strong>Asignar Estados de Oxidación:</strong> Identificamos los elementos que cambian.
                <br>$H_2S$ (S es -2), $KMnO_4$ (Mn es +7) $\\rightarrow$ $S$ (S es 0), $MnSO_4$ (Mn es +2).</li>
            <li><strong>Escribir Semi-reacciones:</strong>
                <br><b>Oxidación:</b> $H_2S \\rightarrow S$ (El S pierde electrones)
                <br><b>Reducción:</b> $MnO_4^- \\rightarrow Mn^{2+}$ (El Mn gana electrones)
            </li>
            <li><strong>Balancear Átomos y Cargas en cada Semi-reacción:</strong>
                <br><em>Oxidación:</em>
                <br>$H_2S \\rightarrow S + 2H^+ + 2e^-$ (Balanceamos H con $H^+$ y carga con $e^-$)
                <br><em>Reducción:</em>
                <br>$MnO_4^- \\rightarrow Mn^{2+} + 4H_2O$ (Balanceamos O con $H_2O$)
                <br>$MnO_4^- + 8H^+ \\rightarrow Mn^{2+} + 4H_2O$ (Balanceamos H con $H^+$)
                <br>$MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$ (Balanceamos carga con $e^-$)
            </li>
            <li><strong>Igualar Electrones:</strong> Multiplicamos las semi-reacciones para que el número de electrones transferidos sea el mismo.
                <br>($H_2S \\rightarrow S + 2H^+ + 2e^-$) $\\mathbf{\\times 5}$
                <br>($MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$) $\\mathbf{\\times 2}$
                <br>Nos da:
                <br>$5H_2S \\rightarrow 5S + 10H^+ + 10e^-$
                <br>$2MnO_4^- + 16H^+ + 10e^- \\rightarrow 2Mn^{2+} + 8H_2O$
            </li>
            <li><strong>Sumar Semi-reacciones y Simplificar:</strong>
                <br>$5H_2S + 2MnO_4^- + 16H^+ \\rightarrow 5S + 10H^+ + 2Mn^{2+} + 8H_2O$
                <br>Cancelamos los $H^+$:
                <br>$5H_2S + 2MnO_4^- + 6H^+ \\rightarrow 5S + 2Mn^{2+} + 8H_2O$
            </li>
            <li><strong>Reconstruir la Ecuación Molecular:</strong> Usamos los coeficientes obtenidos en la ecuación molecular completa, añadiendo los iones espectadores ($K^+$ y $SO_4^{2-}$) y ajustando el ácido sulfúrico. El resultado final es:<br>
            $\\mathbf{5}H_2S + \\mathbf{2}KMnO_4 + \\mathbf{3}H_2SO_4 \\rightarrow \\mathbf{5}S + \\mathbf{2}MnSO_4 + K_2SO_4 + \\mathbf{8}H_2O$</li>
         </ol>`,
    
    `<strong>b) Balanceo por Tanteo o Inspección.</strong> Para reacciones de doble desplazamiento como esta, el tanteo es rápido y eficiente.
         <ol style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li><strong>Identificar la fórmula más compleja:</strong> $Al_2(SO_4)_3$. Tiene 2 Al y 3 iones sulfato ($SO_4^{2-}$).
            </li>
            <li><strong>Balancear el Aluminio (Al):</strong> Colocamos un <strong>2</strong> delante de $Al(NO_3)_3$ en los reactivos.
            <br>$\\mathbf{2}Al(NO_3)_3 + H_2SO_4 \\rightarrow HNO_3 + Al_2(SO_4)_3$
            </li>
            <li><strong>Balancear el ión Sulfato ($SO_4$):</strong> Colocamos un <strong>3</strong> delante de $H_2SO_4$ en los reactivos para igualar los 3 iones sulfato del producto.
            <br>$2Al(NO_3)_3 + \\mathbf{3}H_2SO_4 \\rightarrow HNO_3 + Al_2(SO_4)_3$
            </li>
            <li><strong>Balancear el Hidrógeno (H) y el ión Nitrato ($NO_3$):</strong> En los reactivos ahora tenemos $3 \\times 2 = 6$ hidrógenos y $2 \\times 3 = 6$ iones nitrato. Colocamos un <strong>6</strong> delante de $HNO_3$ en los productos para balancearlos.
            <br>$2Al(NO_3)_3 + 3H_2SO_4 \\rightarrow \\mathbf{6}HNO_3 + Al_2(SO_4)_3$
            </li>
            <li><strong>Verificación Final:</strong> Contamos los átomos de Oxígeno (no incluidos en los iones) y todo coincide. ¡La ecuación está balanceada!</li>
         </ol>`,
    
    `<strong>b) Balanceo por Método Algebraico.</strong> Este método es infalible y consiste en crear un sistema de ecuaciones lineales.
         <ol style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li><strong>Asignar coeficientes (variables):</strong>
            <br>$\\mathbf{a}Al(NO_3)_3 + \\mathbf{b}H_2SO_4 \\rightarrow \\mathbf{c}HNO_3 + \\mathbf{d}Al_2(SO_4)_3$
            </li>
            <li><strong>Crear ecuaciones por elemento:</strong>
                <br>Al: $a = 2d$
                <br>N: $3a = c$
                <br>O: $9a + 4b = 3c + 12d$
                <br>H: $2b = c$
                <br>S: $b = 3d$
            </li>
            <li><strong>Resolver el sistema:</strong> Asignamos un valor a una variable (generalmente, $d=1$).
                <br>Si $\\mathbf{d = 1}$:
                <br>De la ecuación de Al: $a = 2(1) \implies \\mathbf{a = 2}$
                <br>De la ecuación de S: $b = 3(1) \implies \\mathbf{b = 3}$
                <br>De la ecuación de N: $c = 3a = 3(2) \implies \\mathbf{c = 6}$
            </li>
            <li><strong>Sustituir los coeficientes:</strong> Los valores son a=2, b=3, c=6, d=1. Esto nos da la misma ecuación balanceada:
            <br>$\\mathbf{2}Al(NO_3)_3 + \\mathbf{3}H_2SO_4 \\rightarrow \\mathbf{6}HNO_3 + Al_2(SO_4)_3$</li>
         </ol>`
  ],
  /**
   * Dibuja una balanza para ilustrar la ley de conservación de la masa.
   */
  drawGraph: function(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    // Base de la balanza
    const baseX = w / 2;
    const baseY = h * 0.85;
    ctx.fillStyle = '#4b5563';
    ctx.beginPath();
    ctx.moveTo(baseX - w * 0.2, baseY);
    ctx.lineTo(baseX + w * 0.2, baseY);
    ctx.lineTo(baseX + w * 0.15, baseY + h * 0.1);
    ctx.lineTo(baseX - w * 0.15, baseY + h * 0.1);
    ctx.closePath();
    ctx.fill();
    
    // Mástil
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(baseX, h * 0.1);
    ctx.stroke();
    
    // Brazo de la balanza
    const armY = h * 0.2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, armY);
    ctx.lineTo(w * 0.9, armY);
    ctx.stroke();
    
    // Platillos y cadenas
    const drawPan = (x) => {
      const panY = armY + h * 0.4;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, armY);
      ctx.lineTo(x - w * 0.1, panY);
      ctx.moveTo(x, armY);
      ctx.lineTo(x + w * 0.1, panY);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(x, panY + h * 0.02, w * 0.12, h * 0.05, 0, 0, 2 * Math.PI);
      ctx.fillStyle = '#6b7280';
      ctx.fill();
    };
    
    drawPan(w * 0.2); // Platillo izquierdo
    drawPan(w * 0.8); // Platillo derecho
    
    // Títulos
    ctx.font = `bold ${w * 0.045}px Anton`;
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('Reactivos', w * 0.2, armY + h * 0.55);
    ctx.fillText('Productos', w * 0.8, armY + h * 0.55);
    
    // Texto de Conservación
    ctx.font = `bold ${w * 0.05}px Anton`;
    ctx.fillStyle = '#10b981';
    ctx.fillText('Ley de Conservación de la Masa', baseX, h * 0.1);
  }
};