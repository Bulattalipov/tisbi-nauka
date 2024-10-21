// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import select from './modules/select';
import timer from './modules/timer';
import infinitySlider from './modules/infinitySlider';
import Accordions from './modules/Accordions';
import burger from './modules/burger';
import dropDownListInHeader from './modules/dropDownListInHeader';
import switchingRegistrationForm from './modules/switchingRegistrationForm';
import choicesSelectForm from './modules/choice-select-form';
import inputMask from './modules/inputMask';
import changeStateModal from './modules/changeStateModal';
import introSlider from './modules/introSlider';
import resultSlider from './modules/resultSlider';
import debug from './helpers/debug';
import latestNewsSlider from './modules/latestNewsSlider';
import activeGrantsSlider from './modules/activeGrantsSlider';
import airDatepicker from './modules/airDatepicker';
import mysticismSlider from './modules/mysticismSlider';
import scientificClubsSlider from './modules/scientificClubsSlider';
import tabsFuncs from './modules/tabsFuncs';
import stickyMenu from './modules/stickyMenu';
import choicesSelect from './modules/choice-select';
import simpleSlider from './modules/simple-slider';
import showTimerBanner from './modules/showTimerBanner';
import smoothScroll from './modules/smoothScroll';
import showMoreAwards from './modules/showMoreAwards';
import showFixedBtn from './modules/showFixedBtn';
import chartsFun from './modules/chartsFun';
import sliderWinner from './modules/sliderWinner';
import tooltipFunc from './modules/tooltipFunc';
import sortListCompetitions from './modules/sortListCompetitions';
import deleteBackgroundImage from './modules/deleteBackgroundImage';
import modalSlider from './modules/modalSlider';
import filtersAirDtaepicker from './modules/filtersAirDtaepicker';
import openFilter from './modules/openFilter';
import dropzone from './modules/dropzone';
import switchingRegistrationFormMaterials from './modules/switchingRegistrationFormMaterials';

documenReady(() => {
  window.tisbiNaukaApi = {};
  window.tisbiNaukaApi.changeStateModal = changeStateModal;

  dropzone();
  lazyIMages();
  initModal();
  select();
  timer();
  infinitySlider();
  accordions();
  burger();
  dropDownListInHeader();
  switchingRegistrationForm();
  choicesSelectForm();
  inputMask();
  introSlider();
  resultSlider();
  debug(); // Нажми 5 раз "d" на клавиатуре
  latestNewsSlider();
  activeGrantsSlider();
  airDatepicker();
  mysticismSlider();
  scientificClubsSlider();
  tabsFuncs();
  directionsAccordions();
  stickyMenu();
  choicesSelect();
  simpleSlider();
  showTimerBanner();
  smoothScroll();
  showMoreAwards();
  showFixedBtn();
  chartsFun();
  sliderWinner();
  tooltipFunc();
  sortListCompetitions();
  deleteBackgroundImage();
  modalSlider();
  filtersAirDtaepicker();
  openFilter();
  switchingRegistrationFormMaterials();
});

function accordions() {

  if (!document.querySelector(".js-faq-accordions")) return;

  new Accordions({
    selectors: {
      container: '.js-faq-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}

function directionsAccordions() {

  if (!document.querySelector(".js-directions-accordions")) return;

  new Accordions({
    selectors: {
      container: '.js-directions-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}
