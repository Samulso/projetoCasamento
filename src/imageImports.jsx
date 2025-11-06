// imageImports.jsx - Centralize todas as importações de imagens

// Imagens principais
import logo from "./assets/img/logo.png";
import img1 from "./assets/img/img_1.png";
import img2 from "./assets/img/img_2.png";

// Fotos do carrossel de apresentação
import foto1Ap from "./assets/img/foto1Ap.jpg";
import foto2Ap from "./assets/img/foto2Ap.jpg";
import foto3Ap from "./assets/img/foto3Ap.jpg";
import foto4AP from "./assets/img/foto4AP.jpg";

// Imagens de preparo (galeria)
import preparo1 from "./assets/img/preparo1.png";
import preparo2 from "./assets/img/preparo2.png";
import preparo3 from "./assets/img/preparo3.png";
import preparo4 from "./assets/img/preparo4.png";
import preparo5 from "./assets/img/preparo5.png";
import preparo6 from "./assets/img/preparo6.png";
import preparo7 from "./assets/img/preparo7.png";
import preparoFundo from "./assets/img/preparoFundo.png";

// Imagens de receitas
import recipe1 from "./assets/img/recipe1.png";
import recipe2 from "./assets/img/recipe2.png";
import recipe31 from "./assets/img/recipe3-1.png";
import recipe32 from "./assets/img/recipe3-2.png";
import recipe41 from "./assets/img/recipe4-1.jpg";
import recipe42 from "./assets/img/recipe4-2.jpg";
import recipe43 from "./assets/img/recipe4-3.jpg";

// Imagens do conteúdo lateral direito
import recipeRightContent1 from "./assets/img/recipe-rigth-content-image1.jpg";
import recipeRightContent2 from "./assets/img/recipe-rigth-content-image2.jpg";
import recipeRightContent3 from "./assets/img/recipe-rigth-content-image3.jpg";

// Imagens de montagem
import montagem1 from "./assets/img/montagem1.png";
import montagem2 from "./assets/img/montagem2.png";
import produtividadeMontagem from "./assets/img/produtividade-montagem.png";

// Imagens adicionais
import consistenciaVisual from "./assets/img/consistencia-visual.png";
import controleQualidade from "./assets/img/controle-qualidade.png";
import imagePng from "./assets/img/image.png";

// SVGs
import wave from "./assets/wave.svg";
import reactSvg from "./assets/react.svg";

// Vídeo
import videoEditado from "./assets/vids/videoeditado.mp4";

// Exportar tudo
export const images = {
  // Principais
  logo,
  img1,
  img2,
  
  // Fotos apresentação
  foto1Ap,
  foto2Ap,
  foto3Ap,
  foto4AP,
  
  // Preparo
  preparo1,
  preparo2,
  preparo3,
  preparo4,
  preparo5,
  preparo6,
  preparo7,
  preparoFundo,
  
  // Receitas
  recipe1,
  recipe2,
  recipe31,
  recipe32,
  recipe41,
  recipe42,
  recipe43,
  
  // Conteúdo lateral
  recipeRightContent1,
  recipeRightContent2,
  recipeRightContent3,
  
  // Montagem
  montagem1,
  montagem2,
  produtividadeMontagem,
  
  // Adicionais
  consistenciaVisual,
  controleQualidade,
  imagePng,
  
  // SVGs
  wave,
  reactSvg,
  
  // Vídeo
  videoEditado
};

// Arrays específicos para facilitar o uso
export const galeriaImages = [
  { url: preparo1 },
  { url: preparo2 },
  { url: preparo3 },
  { url: preparo4 },
  { url: preparo5 },
  { url: preparo6 },
  { url: preparo7 }
];

export const slidesApresentacao = [foto1Ap, foto2Ap, foto3Ap, foto4AP];

export default images;