/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html",
    "./src/**/*.{css,js}",],
  theme: {
    extend: {

      backgroundImage: {
        "01": "url('./src/img/capa site.jpg')",
        "02": "url('./src/img/consultlupa.jpg')",
        "03": "url('./src/img/consult2.jpg')",
        "04": "url('./src/img/consult3.jpg')",
      },

      colors: {
      
        'escuro': '#11151c',
        verdeacinzentado: '#94a187',
        azulmedio: '#54719c',
        salmao: '#c97d60',
        rosado: '#ffbcb5',
  
      },

    },

    
  },
  plugins: [],
}
