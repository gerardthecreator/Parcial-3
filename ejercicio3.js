const ejercicio3 = {
    title: "Estequiometría de Reacciones en Disolución",
    problem: `
        <p class="content-block__body">
            Se agregan 95.0 mL de una disolución de $KI$ al 12.0 % en peso y densidad 1.093 g/cm³ a 100.0 mL de una disolución de $Pb(NO_3)_2$ al 15.0 % en peso y 1.134 g/cm³.
        </p>
        <p class="content-block__body" style="text-align: center; font-size: 1.2rem; margin-top: 1rem;">
            Según la reacción: $KI_{(ac)} + Pb(NO_3)_{2(ac)} \\rightarrow KNO_{3(ac)} + PbI_{2(s)}$
        </p>
        <ul style="list-style-type: lower-alpha; padding-left: 2rem; font-size: 1.1rem; margin-top: 1rem;">
            <li>Calcule las molaridades de las disoluciones iniciales de $KI$ y $Pb(NO_3)_2$.</li>
            <li>¿Qué cantidad en gramos se forma del precipitado de $PbI_2$?</li>
            <li>¿Qué cantidad queda del reactivo limitante al finalizar la reacción?</li>
        </ul>
        <br>
        <p class="content-block__body">
            <b>Datos:</b> Masas atómicas (g/mol): K=39.10; I=126.90; Pb=207.2; N=14.01; O=16.00.
        </p>
    `,
    solution: `
        <ol style="list-style-type: lower-alpha; padding-left: 2rem; font-size: 1.1rem; line-height: 2;">
            <li><b>Molaridades iniciales:</b>
                <ul>
                    <li>Molaridad del $KI = \\mathbf{0.790 M}$</li>
                    <li>Molaridad del $Pb(NO_3)_2 = \\mathbf{0.514 M}$</li>
                </ul>
            </li>
            <li>Gramos de $PbI_2$ formados: $\\mathbf{17.3 \\text{ g}}$</li>
            <li>Cantidad de reactivo limitante restante: $\\mathbf{0 \\text{ g}}$ (se consume por completo).</li>
        </ol>
    `,
    explanation: [
        `<strong>Paso 1: Balancear la Ecuación Química.</strong> Antes de cualquier cálculo estequiométrico, la ecuación debe estar balanceada. La reacción iónica neta es $2I^- + Pb^{2+} \\rightarrow PbI_2$. La ecuación molecular balanceada es:
         <div style="text-align:center; font-size:1.3rem; color:#facc15; margin:0.5rem 0;"> $\\mathbf{2}KI_{(ac)} + Pb(NO_3)_{2(ac)} \\rightarrow \\mathbf{2}KNO_{3(ac)} + PbI_{2(s)}$ </div>
         La relación estequiométrica clave es que <strong>2 moles de KI reaccionan con 1 mol de $Pb(NO_3)_2$</strong>.`,

        `<strong>Paso 2: Calcular Moles Iniciales de cada Reactivo.</strong> Necesitamos saber cuántos moles de cada sustancia tenemos antes de la reacción.
         <br><strong>Para el KI:</strong>
         <ol>
            <li>Masa disolución = $95.0 \\text{ mL} \\times 1.093 \\frac{\\text{g}}{\\text{mL}} = 103.84 \\text{ g}$</li>
            <li>Masa soluto (KI) = $103.84 \\text{ g disolución} \\times 0.120 = 12.46 \\text{ g KI}$</li>
            <li>Masa molar KI = $39.10 + 126.90 = 166.00 \\text{ g/mol}$</li>
            <li>$\\mathbf{\\text{Moles KI}} = \\frac{12.46 \\text{ g}}{166.00 \\text{ g/mol}} = \\mathbf{0.0751 \\text{ mol}}$</li>
         </ol>
         <strong>Para el $Pb(NO_3)_2$:</strong>
         <ol>
            <li>Masa disolución = $100.0 \\text{ mL} \\times 1.134 \\frac{\\text{g}}{\\text{mL}} = 113.4 \\text{ g}$</li>
            <li>Masa soluto ($Pb(NO_3)_2$) = $113.4 \\text{ g disolución} \\times 0.150 = 17.01 \\text{ g } Pb(NO_3)_2$</li>
            <li>Masa molar $Pb(NO_3)_2 = 207.2 + 2(14.01 + 3 \\times 16.00) = 331.22 \\text{ g/mol}$</li>
            <li>$\\mathbf{\\text{Moles } Pb(NO_3)_2} = \\frac{17.01 \\text{ g}}{331.22 \\text{ g/mol}} = \\mathbf{0.0514 \\text{ mol}}$</li>
         </ol>`,
        
        `<strong>a) Calcular las Molaridades.</strong> Con los moles calculados y los volúmenes iniciales (en Litros), podemos encontrar las molaridades:
         <ul>
            <li>$\\text{Molaridad } KI = \\frac{0.0751 \\text{ mol}}{0.0950 \\text{ L}} = \\mathbf{0.790 M}$</li>
            <li>$\\text{Molaridad } Pb(NO_3)_2 = \\frac{0.0514 \\text{ mol}}{0.1000 \\text{ L}} = \\mathbf{0.514 M}$</li>
         </ul>`,

        `<strong>Paso 3: Identificar el Reactivo Limitante.</strong> Comparamos la relación molar que tenemos con la que exige la estequiometría (2 KI : 1 $Pb(NO_3)_2$).
        <br>Vamos a ver cuánto $Pb(NO_3)_2$ se necesitaría para reaccionar con todo el KI:
        $$ 0.0751 \\text{ mol KI} \\times \\frac{1 \\text{ mol } Pb(NO_3)_2}{2 \\text{ mol KI}} = 0.03755 \\text{ mol } Pb(NO_3)_2 \\text{ (necesarios)} $$
        Tenemos $0.0514 \\text{ mol}$ de $Pb(NO_3)_2$, que es más de lo que necesitamos ($0.03755$). Por lo tanto, <strong>el $Pb(NO_3)_2$ es el reactivo en exceso</strong> y el $\\mathbf{KI}$ <strong>es el reactivo limitante</strong>. La cantidad de producto dependerá del KI.`,

        `<strong>b) Calcular Gramos de $PbI_2$ Formado.</strong> Usamos los moles del reactivo limitante (KI) para calcular los moles de producto.
         <ul>
            <li>Masa Molar $PbI_2 = 207.2 + 2 \\times 126.90 = 461.0 \\text{ g/mol}$</li>
            <li>Moles $PbI_2$ formados = $0.0751 \\text{ mol KI} \\times \\frac{1 \\text{ mol } PbI_2}{2 \\text{ mol KI}} = 0.03755 \\text{ mol } PbI_2$</li>
            <li>Masa $PbI_2$ formada = $0.03755 \\text{ mol} \\times 461.0 \\frac{\\text{g}}{\\text{mol}} = \\mathbf{17.3 \\text{ g}}$</li>
         </ul>`,
        
        `<strong>c) Calcular la Cantidad Restante de Reactivo Limitante.</strong> Esta es una pregunta conceptual. Por definición, el reactivo limitante es aquel que se consume <strong>completamente</strong> durante la reacción química. Una vez que se agota, la reacción se detiene. Por lo tanto, la cantidad que queda es <strong>cero</strong>.
        <br>$$ \\text{Cantidad de KI restante} = \\mathbf{0 \\text{ g}} $$`
    ],
    /**
     * Dibuja un esquema de los reactivos y el producto final.
     */
    drawGraph: function(canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas || !canvas.getContext) return; 
        
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const drawBeaker = (x, y, width, height, color, label1, label2) => {
            ctx.strokeStyle = '#d1d5db'; // gray-300
            ctx.lineWidth = 3;

            // Dibuja el vaso
            ctx.beginPath();
            ctx.moveTo(x - width/2, y);
            ctx.lineTo(x - width/2, y + height);
            ctx.ellipse(x, y + height, width/2, width/8, 0, Math.PI, 2 * Math.PI, true);
            ctx.lineTo(x + width/2, y);
            ctx.stroke();

            // Líquido
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(x, y + height/3, width/2, width/8, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillRect(x - width/2 + 1.5, y + height/3, width - 3, height - height/3 - width/8 + 1);

            // Etiqueta
            ctx.fillStyle = '#FFF';
            ctx.font = `bold ${w * 0.03}px Oswald`;
            ctx.textAlign = 'center';
            ctx.fillText(label1, x, y + height/1.8);
            ctx.font = `normal ${w * 0.025}px Oswald`;
            ctx.fillText(label2, x, y + height/1.5);
        };

        // Beaker 1: KI
        drawBeaker(w * 0.18, h * 0.2, w * 0.2, h * 0.6, '#3b82f688', 'Disolución', 'KI (ac)');
        // Beaker 2: Pb(NO3)2
        drawBeaker(w * 0.48, h * 0.2, w * 0.2, h * 0.6, '#ef444488', 'Disolución', 'Pb(NO₃)₂(ac)');
        
        // Flecha de mezcla
        ctx.font = `bold ${w * 0.1}px Oswald`;
        ctx.fillStyle = '#9ca3af';
        ctx.fillText('+', w*0.33, h*0.55);
        ctx.fillText('→', w*0.67, h*0.55);
        
        // Beaker final
        drawBeaker(w * 0.82, h * 0.2, w * 0.2, h * 0.6, '#6b728088', 'Mezcla Final', '');
        // Precipitado
        ctx.fillStyle = '#facc15'; // Amarillo para PbI2
        ctx.beginPath();
        ctx.ellipse(w * 0.82, h * 0.8 - w*0.015, w*0.09, w*0.03, 0, Math.PI, 2*Math.PI);
        ctx.fill();
        ctx.font = `bold ${w * 0.025}px Oswald`;
        ctx.fillStyle = '#111827';
        ctx.fillText('PbI₂(s)', w * 0.82, h * 0.8 - w*0.02);
    }
};