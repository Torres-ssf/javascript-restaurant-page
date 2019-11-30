import section1 from './section/section1';
import section2 from './section/section2';
import section3 from './section/section3';
import section4 from './section/section4';

const sections = (() => {
  const getSection1 = () => section1();

  const getSection2 = () => section2();

  const getSection3 = () => section3();

  const getSection4 = () => section4();

  return {
    getSection1,
    getSection2,
    getSection3,
    getSection4,
  };
})();

export default sections;