const ejercicio1 = {
  title: "Nomenclatura de Compuestos Químicos",
  problem: `
        <p class="content-block__body">
            Complete la siguiente tabla con la fórmula química o el nombre del compuesto correspondiente en los sistemas de nomenclatura indicados. Utilice '?' para los campos que debe rellenar.
        </p>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Fórmula</th>
                        <th>Nomenclatura Sistemática</th>
                        <th>Nomenclatura Stock</th>
                        <th>Nomenclatura Tradicional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$H_2SO_4$</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>?</td>
                        <td>Tetrahidróxido de cromo</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                     <tr>
                        <td>$FeCO_3$</td>
                        <td>?</td>
                        <td>Carbonato de hierro(II)</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>$H_3PO_3$</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>$H_6P_4O_{13}$</td>
                        <td>?</td>
                        <td>Ácido tetrafosfórico(V)</td>
                        <td>?</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
  solution: `
        <p class="content-block__body">
            Aquí está la tabla completa con todas las nomenclaturas correctas. ¡Compara tus respuestas!
        </p>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Fórmula</th>
                        <th>Nomenclatura Sistemática</th>
                        <th>Nomenclatura Stock</th>
                        <th>Nomenclatura Tradicional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>$H_2SO_4$</b></td>
                        <td>Tetraoxosulfato(VI) de hidrógeno</td>
                        <td>Ácido tetraoxosulfúrico(VI)</td>
                        <td>Ácido sulfúrico</td>
                    </tr>
                    <tr>
                        <td><b>$Cr(OH)_4$</b></td>
                        <td><b>Tetrahidróxido de cromo</b></td>
                        <td>Hidróxido de cromo(IV)</td>
                        <td>Ácido crómico / Hidróxido crómico</td>
                    </tr>
                    <tr>
                        <td><b>$FeCO_3$</b></td>
                        <td>Trioxocarbonato(IV) de hierro(II)</td>
                        <td><b>Carbonato de hierro(II)</b></td>
                        <td>Carbonato ferroso</td>
                    </tr>
                    <tr>
                        <td><b>$H_3PO_3$</b></td>
                        <td>Trioxofosfato(III) de hidrógeno</td>
                        <td>Ácido trioxofosfórico(III)</td>
                        <td>Ácido fosforoso</td>
                    </tr>
                    <tr>
                        <td><b>$H_6P_4O_{13}$</b></td>
                        <td>Tridecaoxo-tetrafosfato(V) de hidrógeno</td>
                        <td><b>Ácido tetrafosfórico(V)</b></td>
                        <td>Ácido tetrafosfórico</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <style>
            .table-container { overflow-x: auto; }
            table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
            th, td { border: 1px solid #4b5563; padding: 0.75rem; text-align: left; }
            th { background-color: #374151; font-family: 'Anton', sans-serif; color: #93c5fd; }
            tbody tr:nth-child(odd) { background-color: #1f2937; }
            b, strong { color: #facc15; }
        </style>
    `,
  explanation: [
    `<strong>Comprender los tres sistemas de nomenclatura.</strong> La clave para este ejercicio es conocer las reglas básicas de cada sistema:
         <ul>
            <li><b>Sistemática (IUPAC):</b> Usa prefijos numéricos (mono-, di-, tri-, tetra-, etc.) para indicar la cantidad de cada átomo. Ejemplo: $CO_2$ es <u>dióxido</u> de carbono.</li>
            <li><b>Stock:</b> Indica el estado de oxidación del catión (metal o no metal central) con números romanos entre paréntesis. Es muy útil cuando un elemento tiene múltiples estados de oxidación. Ejemplo: $Fe^{2+}$ es hierro(II).</li>
            <li><b>Tradicional:</b> Utiliza prefijos y sufijos (como -oso, -ico, hipo-, per-) basados en los estados de oxidación. Aunque es más antigua, sigue siendo muy común. Ejemplo: El ión férr<u>ico</u> ($Fe^{3+}$) tiene un estado de oxidación mayor que el ferr<u>oso</u> ($Fe^{2+}$).</li>
         </ul>`,
    
    `<strong>Ejemplo 1: A partir de la fórmula $H_2SO_4$.</strong>
         <ol>
            <li><b>Calcular Estado de Oxidación:</b> Para la nomenclatura Stock, necesitamos el número de oxidación del azufre (S). Sabemos que $H = +1$ y $O = -2$. La molécula es neutra (carga total = 0).
            <br>$(2 \times +1) + S + (4 \times -2) = 0 \implies 2 + S - 8 = 0 \implies S = +6$.</li>
            <li><b>Aplicar Nomenclaturas:</b><br>
                - <u>Stock:</u> Es un ácido, por lo que empieza con "Ácido". Contiene 4 oxígenos (tetraoxo) y azufre (sulfúrico) con estado de oxidación +6 (VI) -> <b>Ácido tetraoxosulfúrico(VI)</b>.<br>
                - <u>Sistemática:</u> Nombra el anión ($SO_4^{2-}$) como "tetraoxosulfato(VI)". Luego se añade "de hidrógeno" -> <b>Tetraoxosulfato(VI) de hidrógeno</b>.<br>
                - <u>Tradicional:</u> Es uno de los ácidos más comunes, conocido como <b>Ácido sulfúrico</b>. El sufijo "-ico" corresponde al mayor estado de oxidación común del azufre (+6).</li>
         </ol>`,
    
    `<strong>Ejemplo 2: A partir del nombre $Carbonato de hierro(II)$.</strong>
         <ol>
            <li><b>Descomponer el Nombre:</b><br>
                - "hierro(II)" nos dice inequívocamente que tenemos el catión $Fe^{2+}$.<br>
                - "Carbonato" es el nombre tradicional del anión poliatómico $CO_3^{2-}$.</li>
            <li><b>Formar la Fórmula:</b> Para formar un compuesto neutro, necesitamos combinar los iones. Como las cargas son iguales y opuestas ($+2$ y $-2$), se necesita un ión de cada uno. La fórmula es <b>$FeCO_3$</b>.</li>
            <li><b>Obtener los otros nombres:</b><br>
                - <u>Tradicional:</u> El hierro tiene dos estados comunes, +2 y +3. El menor (+2) usa el sufijo "-oso". Por tanto, es <b>Carbonato ferroso</b>.<br>
                - <u>Sistemática:</u> Nombramos el anión "trioxocarbonato(IV)" y el catión "de hierro(II)" -> <b>Trioxocarbonato(IV) de hierro(II)</b>.</li>
         </ol>`,
    
    `<strong>Conclusión y práctica.</strong> La nomenclatura química requiere práctica y atención al detalle. Identificar si el compuesto es un óxido, hidróxido, ácido o sal es el primer paso para decidir qué reglas aplicar. ¡La mejor manera de mejorar es hacer muchos ejercicios como este!`
  ],
  /**
   * Dibuja un diagrama conceptual de los tres sistemas de nomenclatura.
   * @param {string} canvasId - El ID del elemento canvas donde dibujar.
   */
  drawGraph: function(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    const drawPillar = (x, color, title, text) => {
      const pillarW = w * 0.28;
      const pillarH = h * 0.7;
      const pillarY = h * 0.15;
      
      ctx.fillStyle = color + '33'; // color con opacidad
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      
      ctx.beginPath();
      ctx.roundRect(x, pillarY, pillarW, pillarH, 15);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = color;
      ctx.font = `bold ${w * 0.045}px Anton`;
      ctx.textAlign = 'center';
      ctx.fillText(title, x + pillarW / 2, pillarY + h * 0.1);
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `normal ${w * 0.028}px Oswald`;
      const lines = text.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, x + pillarW / 2, pillarY + h * 0.25 + (i * h * 0.08));
      });
    };
    
    // Columna Sistemática
    drawPillar(w * 0.04, '#06b6d4', 'Sistemática', 'Usa prefijos:\ndi-, tri-, tetra-');
    
    // Columna Stock
    drawPillar(w * 0.36, '#f59e0b', 'Stock', 'Usa números\nromanos:\n(II), (IV), (VI)');
    
    // Columna Tradicional
    drawPillar(w * 0.68, '#8b5cf6', 'Tradicional', 'Usa sufijos:\n-oso, -ico');
  }
};