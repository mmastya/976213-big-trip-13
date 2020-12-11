import {createMenu} from "./view/menu.js";
import {createRoutAndCost} from "./view/routeAndCost.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortTemplate} from "./view/sort";
import {createForm} from "./view/formCreater.js";
import {createPointTemplate} from "./view/point.js";

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.page-body`);
const siteHeaderElement = siteMainElement.querySelector(`.page-header`);
const sitePageBodyContainer = siteHeaderElement.querySelector(`.page-body__container`);
const siteTripMain = sitePageBodyContainer.querySelector(`.trip-main`);
const siteTripMainControls = siteTripMain.querySelector(`.trip-main__trip-controls`);
const sitePageMain = siteMainElement.querySelector(`.page-body__page-main`);
const sitePageMainBodyContainer = sitePageMain.querySelector(`.page-body__container`);
const siteTripEvents = sitePageMainBodyContainer.querySelector(`.trip-events`);

const siteRoutAndCostElement = siteTripMain.querySelector(`.trip-main__trip-info`);

const siteMenuElement = siteTripMainControls.querySelector(`.trip-controls__trip-tabs`);
const siteFiltersElement = siteTripMainControls.querySelector(`.trip-filters`);

const siteSortElement = siteTripEvents.querySelector(`.trip-events__trip-sort`);
const siteTripEventsList = siteTripEvents.querySelector(`.trip-events__list`);
const siteTripEventsItem = siteTripEventsList.querySelector(`.trip-events__item`);
const siteTripEventElement = siteTripEventsItem.querySelector(`.event`);
const siteTripEventAddElement = siteTripEventElement.querySelector(`.event--edit`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(siteTripEventElement, createPointTemplate(), `beforeend`);
}

render(siteMenuElement, createMenu(), `beforeend`);
render(siteRoutAndCostElement, createRoutAndCost(), `beforeend`);
render(siteFiltersElement, createFiltersTemplate(), `beforeend`);
render(siteSortElement, createSortTemplate(), `beforeend`);
render(siteTripEventAddElement, createForm(), `beforeend`);

