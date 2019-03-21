import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawIntoTheNight = _props => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign(
    {
      height: props.height || defaultProps.height,
      width: '100%'
    },
    props.style
  );
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return (
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1088 687.962" style={style} {...props}>
      <path
        d="M961.81 454.442c-5.27 45.15-16.22 81.4-31.25 110.31-20 38.52-54.21 54.04-84.77 70.28a193.277 193.277 0 0 1-27.46 11.94c-55.61 19.3-117.85 14.18-166.74 3.99a657.296 657.296 0 0 0-104.09-13.16q-14.97-.675-29.97-.67c-15.42.02-293.07 5.29-360.67-131.57-16.69-33.76-28.13-75-32.24-125.27-11.63-142.12 52.29-235.46 134.74-296.47 155.97-115.41 369.76-110.57 523.43 7.88 102.36 78.9 198.2 198.31 179.02 362.74z"
        fill="#3f3d56"
      />
      <path
        d="M930.56 564.752c-20 38.52-47.21 64.04-77.77 80.28a193.277 193.277 0 0 1-27.46 11.94c-55.61 19.3-117.85 14.18-166.74 3.99a657.296 657.296 0 0 0-104.09-13.16q-14.97-.675-29.97-.67-23.13.03-46.25 1.72c-100.17 7.36-253.82-6.43-321.42-143.29L326 177.962l62.95 161.62 20.09 51.59 55.37-75.98 28.59-39.23 130.2 149.27 36.8-81.27 254.78 207.92 14.21 11.59z"
        fill="#f2f2f2"
      />
      <path
        opacity={0.1}
        d="M302 282.962l26-57 36 83-31-60-31 34zM554.5 647.802q-14.97-.675-29.97-.67l-115.49-255.96zM464.411 315.191L493 292.962l130 150-132-128-26.589.229zM852.79 645.032a193.277 193.277 0 0 1-27.46 11.94L623.2 425.232z"
      />
      <circle cx={482} cy={101.962} r={3} fill="#f2f2f2" />
      <circle cx={399} cy={204.962} r={3} fill="#f2f2f2" />
      <circle cx={602} cy={222.962} r={2} fill="#f2f2f2" />
      <circle cx={182} cy={267.962} r={2} fill="#f2f2f2" />
      <circle cx={614} cy={98.962} r={2} fill="#f2f2f2" />
      <circle cx={738} cy={194.962} r={2} fill="#f2f2f2" />
      <circle cx={860} cy={346.962} r={2} fill="#f2f2f2" />
      <path
        fill="#f2f2f2"
        d="M306 121.222h-2.76v-2.76h-1.48v2.76H299v1.481h2.76v2.759h1.48v-2.759H306v-1.481zM848 424.222h-2.76v-2.76h-1.48v2.76H841v1.481h2.76v2.759h1.48v-2.759H848v-1.481z"
      />
      <path
        d="M1088 613.962c0 16.569-243.557 74-544 74s-544-57.431-544-74 243.557 14 544 14 544-30.568 544-14z"
        fill="#3f3d56"
      />
      <path
        d="M1088 613.962c0 16.569-243.557 74-544 74s-544-57.431-544-74 243.557 14 544 14 544-30.568 544-14z"
        opacity={0.1}
      />
      <ellipse cx={544} cy={613.962} rx={544} ry={30} fill="#3f3d56" />
      <path d="M568 571.962c0 33.137-14.775 24-33 24s-33 9.137-33-24 33-96 33-96 33 62.863 33 96z" fill="#ff6584" />
      <path
        d="M550 584.64c0 15.063-6.716 10.91-15 10.91s-15 4.153-15-10.91 15-43.636 15-43.636 15 28.575 15 43.637z"
        opacity={0.1}
      />
      <rect x={489} y={604.962} width={92} height={18} rx={9} fill="#2f2e41" />
      <rect x={489} y={586.962} width={92} height={18} rx={9} fill="#2f2e41" />
      <path d="M137 490.528c0 55.343 34.72 100.126 77.626 100.126" fill="#3f3d56" />
      <path
        d="M214.626 590.654c0-55.965 38.745-101.251 86.626-101.251M165.125 495.545c0 52.57 22.14 95.11 49.501 95.11"
        fill={primaryColor}
      />
      <path d="M214.626 590.654c0-71.51 44.783-129.376 100.126-129.376" fill="#3f3d56" />
      <path
        d="M198.295 591.36s11.01-.339 14.327-2.701 16.934-5.184 17.757-1.395 16.544 18.845 4.115 18.945-28.879-1.936-32.19-3.953-4.009-10.896-4.009-10.896z"
        fill="#a8a8a8"
      />
      <path
        d="M234.716 604.89c-12.429.1-28.879-1.936-32.19-3.953-2.522-1.536-3.527-7.048-3.863-9.591-.233.01-.368.014-.368.014s.698 8.879 4.01 10.896 19.76 4.053 32.19 3.953c3.587-.03 4.826-1.306 4.758-3.196-.498 1.142-1.867 1.855-4.537 1.877z"
        opacity={0.2}
      />
      <path d="M721.429 527.062c0 38.029 23.857 68.801 53.34 68.801" fill="#3f3d56" />
      <path
        d="M774.77 595.863c0-38.456 26.623-69.574 59.524-69.574M740.755 530.51c0 36.123 15.214 65.353 34.014 65.353"
        fill={primaryColor}
      />
      <path d="M774.77 595.863c0-49.138 30.772-88.9 68.801-88.9" fill="#3f3d56" />
      <path
        d="M763.548 596.348s7.565-.233 9.844-1.856 11.637-3.562 12.202-.958 11.368 12.949 2.828 13.018-19.844-1.33-22.12-2.717-2.754-7.487-2.754-7.487z"
        fill="#a8a8a8"
      />
      <path
        d="M788.574 605.645c-8.54.07-19.844-1.33-22.12-2.716-1.732-1.055-2.422-4.843-2.653-6.59l-.253.01s.48 6.1 2.755 7.486 13.579 2.786 22.119 2.717c2.465-.02 3.317-.897 3.27-2.196-.343.784-1.283 1.275-3.118 1.29z"
        opacity={0.2}
      />
      <path
        d="M893.813 618.7s11.36-1.73 14.5-4.592 16.89-7.488 18.217-3.666 19.494 17.447 6.633 19.106-30.152 1.61-33.835-.065-5.515-10.784-5.515-10.784z"
        fill="#a8a8a8"
      />
      <path
        d="M933.228 628.154c-12.86 1.66-30.153 1.61-33.835-.065-2.804-1.276-4.535-6.859-5.201-9.45-.24.04-.38.06-.38.06s1.834 9.109 5.516 10.784 20.975 1.724 33.835.065c3.713-.479 4.836-1.956 4.53-3.906-.374 1.246-1.702 2.156-4.465 2.512z"
        opacity={0.2}
      />
      <path
        d="M614.26 617.877s9.587-1.459 12.237-3.874 14.255-6.32 15.375-3.095 16.451 14.725 5.598 16.125-25.448 1.358-28.555-.055-4.655-9.1-4.655-9.1z"
        fill="#a8a8a8"
      />
      <path
        d="M647.524 625.857c-10.853 1.4-25.447 1.358-28.555-.056-2.366-1.076-3.827-5.788-4.39-7.975l-.32.051s1.548 7.687 4.656 9.1 17.701 1.456 28.555.056c3.133-.404 4.081-1.65 3.822-3.296-.315 1.05-1.436 1.819-3.768 2.12z"
        opacity={0.2}
      />
      <path
        d="M122.389 613.09s7.463-1.136 9.527-3.016 11.097-4.92 11.969-2.41 12.807 11.464 4.358 12.554-19.811 1.057-22.23-.043-3.624-7.085-3.624-7.085z"
        fill="#a8a8a8"
      />
      <path
        d="M148.285 619.302c-8.449 1.09-19.81 1.058-22.23-.043-1.842-.838-2.98-4.506-3.417-6.209l-.249.04s1.205 5.985 3.624 7.085 13.78 1.133 22.23.043c2.439-.315 3.177-1.285 2.976-2.566-.246.818-1.118 1.416-2.934 1.65z"
        opacity={0.2}
      />
      <path
        d="M383.696 601.319c0 30.22-42.124 20.872-93.7 20.872s-93.074 9.348-93.074-20.872 42.118-36.793 93.694-36.793 93.08 6.572 93.08 36.793z"
        opacity={0.1}
      />
      <path
        d="M383.696 593.878c0 30.22-42.124 20.873-93.7 20.873s-93.074 9.347-93.074-20.873 42.118-36.793 93.694-36.793 93.08 6.572 93.08 36.793z"
        fill="#3f3d56"
      />
      <path
        d="M391.726 455.421a45.271 45.271 0 0 0-7.056 4.472 15.173 15.173 0 0 0-4.907 6.644 61.296 61.296 0 0 1-3.038-8.98 147.824 147.824 0 0 0-6.208-16.166 21.483 21.483 0 0 0 9.757-7.482c4.8 4.778 9.734 9.761 12.122 16.099.411 1.092 1.608 2.256 1.886 3.233.393 1.384-1.507 1.603-2.556 2.18z"
        fill="#ffbfc5"
      />
      <path
        d="M436.892 571.907a44.367 44.367 0 0 1 14.418 7.715 1.505 1.505 0 0 1 .655.887c.109.83-1 1.17-1.805 1.401-2.366.682-3.879 2.905-5.622 4.645s-4.543 3.106-6.576 1.716a6.365 6.365 0 0 1-1.381-1.455l-8.59-11.212a52.072 52.072 0 0 1 9.144-4.014"
        fill="#f1f1f1"
      />
      <path
        d="M452.333 574.24c1.137 1.16 1.63 2.83 2.747 4.01a10.028 10.028 0 0 0 2.541 1.764l6.572 3.617a18.995 18.995 0 0 0 3.176 1.5 29.111 29.111 0 0 0 3.771.788 27.325 27.325 0 0 1 5.319 1.57c1.288.527 2.725 1.437 2.719 2.83a3.076 3.076 0 0 1-.788 1.829c-2.592 3.264-7.178 3.987-11.323 4.425-8.971.949-18.152 1.66-26.922-.455a11.484 11.484 0 0 1-4.732-2.048c-2.646-2.192-3.173-6.187-2.185-9.479a5.125 5.125 0 0 1 2.09-3.108c1.389-.796 3.12-.426 4.716-.55a14.847 14.847 0 0 0 4.862-1.548c1.003-.452 2.158-1.035 2.372-2.228.2-1.107-1.1-2.215-.827-3.203.607-2.19 4.844-.783 5.892.286z"
        fill="#575a89"
      />
      <path
        d="M452.333 574.24c1.137 1.16 1.63 2.83 2.747 4.01a10.028 10.028 0 0 0 2.541 1.764l6.572 3.617a18.995 18.995 0 0 0 3.176 1.5 29.111 29.111 0 0 0 3.771.788 27.325 27.325 0 0 1 5.319 1.57c1.288.527 2.725 1.437 2.719 2.83a3.076 3.076 0 0 1-.788 1.829c-2.592 3.264-7.178 3.987-11.323 4.425-8.971.949-18.152 1.66-26.922-.455a11.484 11.484 0 0 1-4.732-2.048c-2.646-2.192-3.173-6.187-2.185-9.479a5.125 5.125 0 0 1 2.09-3.108c1.389-.796 3.12-.426 4.716-.55a14.847 14.847 0 0 0 4.862-1.548c1.003-.452 2.158-1.035 2.372-2.228.2-1.107-1.1-2.215-.827-3.203.607-2.19 4.844-.783 5.892.286z"
        opacity={0.1}
      />
      <path
        d="M467.581 610.138q1.381.91 2.76 1.822a4.942 4.942 0 0 1 2.007 1.979c.598 1.407-.212 2.998-1.112 4.234a24.353 24.353 0 0 1-10.64 8.246 15.95 15.95 0 0 1-4.622 1.153 1.967 1.967 0 0 1-1.074-.136c-.841-.444-.72-1.648-.73-2.599-.03-2.761-2.115-5.004-3.99-7.032s-3.785-4.525-3.355-7.254a9.016 9.016 0 0 1 2.379-4.244 17.644 17.644 0 0 1 3.617-3.413c1.95-1.276 2.638-.589 4.473.58q5.168 3.294 10.287 6.664z"
        fill="#f1f1f1"
      />
      <path
        d="M458.609 623.59a4.93 4.93 0 0 0 4.349-.98 11.071 11.071 0 0 0 2.823-3.63 30.472 30.472 0 0 0 1.749-3.85c.577-1.548 1.112-3.26 2.472-4.199 1.649-1.138 3.971-.693 5.647.406a29.624 29.624 0 0 1 4.33 4.147 29.264 29.264 0 0 0 12.295 6.841 133.696 133.696 0 0 0 13.89 2.97 7.905 7.905 0 0 1 2.674.86c1.88 1.148 2.508 3.71 1.985 5.85a13.025 13.025 0 0 1-3.462 5.543 13.857 13.857 0 0 1-4.6 3.562 14.612 14.612 0 0 1-4.66.882 79.204 79.204 0 0 1-22.98-1.8 63.028 63.028 0 0 0-8.425-1.681c-1.733-.153-3.478-.104-5.214-.222a27.299 27.299 0 0 1-9.944-2.624 3.52 3.52 0 0 1-1.813-1.504 3.746 3.746 0 0 1-.135-1.992l1.152-10.08c.1-.878.392-1.969 1.264-2.106.83-.13 1.434.72 1.957 1.379a7.122 7.122 0 0 0 8.53 1.865M391.866 496.486c5.058-.57 10.924-.666 14.344 3.104 2.097 2.312 2.734 5.55 3.46 8.585a55.818 55.818 0 0 0 5.48 14.596c1.609 2.84 3.559 5.506 4.793 8.528 1.265 3.097 1.73 6.45 2.47 9.712a58.646 58.646 0 0 0 20.536 32.665c-1.824 4.963-7.101 7.797-12.234 9.065a5.263 5.263 0 0 1-6.287-1.713 84.492 84.492 0 0 1-6.697-8.204c-7.4-9.88-14.911-19.97-18.942-31.637-1.414-4.094-2.828-8.873-6.807-10.584-2.27-.976-4.865-.671-7.3-.258a99.297 99.297 0 0 0-16.013 4.111c-5.56 1.934-11.925 4.314-17.013 1.355-3.045-1.77-4.857-5.171-5.525-8.629a37.244 37.244 0 0 1-.014-10.528 10.833 10.833 0 0 1 1.11-4.552 9.847 9.847 0 0 1 2.66-2.692 54.935 54.935 0 0 1 14.979-8.07c5.14-1.811 10.666-2.426 16.03-3.321q5.463-.913 10.97-1.533z"
        fill="#575a89"
      />
      <path
        d="M391.866 496.486c5.058-.57 10.924-.666 14.344 3.104 2.097 2.312 2.734 5.55 3.46 8.585a55.818 55.818 0 0 0 5.48 14.596c1.609 2.84 3.559 5.506 4.793 8.528 1.265 3.097 1.73 6.45 2.47 9.712a58.646 58.646 0 0 0 20.536 32.665c-1.824 4.963-7.101 7.797-12.234 9.065a5.263 5.263 0 0 1-6.287-1.713 84.492 84.492 0 0 1-6.697-8.204c-7.4-9.88-14.911-19.97-18.942-31.637-1.414-4.094-2.828-8.873-6.807-10.584-2.27-.976-4.865-.671-7.3-.258a99.297 99.297 0 0 0-16.013 4.111c-5.56 1.934-11.925 4.314-17.013 1.355-3.045-1.77-4.857-5.171-5.525-8.629a37.244 37.244 0 0 1-.014-10.528 10.833 10.833 0 0 1 1.11-4.552 9.847 9.847 0 0 1 2.66-2.692 54.935 54.935 0 0 1 14.979-8.07c5.14-1.811 10.666-2.426 16.03-3.321q5.463-.913 10.97-1.533z"
        opacity={0.1}
      />
      <path
        d="M420.82 532.958a26.181 26.181 0 0 1 6.392 4.54 23.099 23.099 0 0 1 4.362 7.827 9.482 9.482 0 0 1 .755 3.017 3.446 3.446 0 0 1-1.119 2.799 4.995 4.995 0 0 1-3.156.771q-2.2.018-4.398-.114a7.408 7.408 0 0 1-2.604-.494 7.277 7.277 0 0 1-2.03-1.536 28.459 28.459 0 0 1-6.227-8.409c-1.061-2.341-2.81-7.737-1.138-10.173 1.722-2.51 7.343.74 9.163 1.772z"
        fill="#ffbfc5"
      />
      <path
        d="M349.907 532.123c7.48 2.396 15.443 2.67 23.264 3.4a194.275 194.275 0 0 1 38.782 7.666 20.627 20.627 0 0 1 7.312 3.405 21.75 21.75 0 0 1 4.242 5.396 91.631 91.631 0 0 1 5.573 9.745c1.42 3.036 2.503 6.218 3.825 9.298a65.368 65.368 0 0 0 20.39 26.117c1.631 1.24 3.448 2.591 3.868 4.597a6.408 6.408 0 0 1-.605 3.778c-1.928 4.491-5.931 7.758-10.131 10.26-1.806 1.075-3.793 2.166-4.681 4.071-6.385-2.636-11.13-8.255-15.08-13.92s-7.455-11.754-12.517-16.452c-2.23-2.07-4.765-3.873-6.519-6.359-2.677-3.795-3.4-8.986-7.005-11.915-3.63-2.95-8.837-2.548-13.492-2.091a331.089 331.089 0 0 1-71.653-.776c-4.945-.593-10.026-1.348-14.31-3.889s-7.618-7.307-7.011-12.25c.568-4.628 4.422-8.296 8.718-10.108s9.044-2.136 13.677-2.658a144.216 144.216 0 0 0 33.353-7.315z"
        fill="#575a89"
      />
      <path
        d="M281.511 541.73c.587-3.923 2.111-7.639 3.067-11.489a70.376 70.376 0 0 1 1.818-7.177c.024-.066.051-.131.076-.198a1.667 1.667 0 0 0 1.225-.7 2.058 2.058 0 0 0 .104-1.079 7.28 7.28 0 0 1 .034-1.15 82.132 82.132 0 0 1 5.12-7.591c3.24-4.59 6.045-9.467 8.846-14.336 2.296-3.992 4.595-7.991 6.496-12.185 1.425-3.146 2.624-6.395 4.2-9.468 5.607-10.937 15.688-18.992 26.53-24.781 10.4-5.553 21.643-9.297 32.578-13.712a6.518 6.518 0 0 1 .763.9c5.908 8.076 6.545 18.689 8.976 28.395.982 3.919 2.294 7.824 2.292 11.864-.004 5.963-2.854 11.511-5.687 16.759a91.306 91.306 0 0 1-8.93 14.251c-1.673 2.071-3.515 4-5.198 6.063-6.893 8.452-10.873 18.844-14.742 29.041-2.24 5.904-5.901 11.14-8.364 16.955-.947 2.235-1.493 4.644-2.681 6.76s-3.258 3.976-5.684 3.987a8.32 8.32 0 0 1-2.097-.329c-8.784-2.26-16.141-8.071-23.44-13.454-1.304-.96-2.614-1.913-3.981-2.78-1.38-.875-2.815-1.66-4.248-2.446l-3.258-1.786c-3.56-1.95-7.124-3.903-10.832-5.553a19.508 19.508 0 0 1-3.2-1.642 19.543 19.543 0 0 1 .217-3.118z"
        fill={primaryColor}
      />
      <circle cx={396.359} cy={434.511} r={20.24} fill="#ffbfc5" />
      <path
        d="M409.974 425.041a4.796 4.796 0 0 0 4.984 2.344 6.985 6.985 0 0 0 4.652-3.318 13.203 13.203 0 0 0 1.723-5.583 5.847 5.847 0 0 0-.843-4.413 9.874 9.874 0 0 0-2.567-1.796 9.84 9.84 0 0 1-3.197-3.237c-.567-.935-.973-1.958-1.482-2.926-1.841-3.497-5.423-6.34-9.373-6.211-1.897.062-3.705.783-5.575 1.111-6.275 1.1-13.095-2.22-18.916.37a17.627 17.627 0 0 0-3.958 2.639q-2.457 2.027-4.725 4.272a9.78 9.78 0 0 0-2.88 4.191c-.79 2.97 1.09 6.288-.107 9.118a13.74 13.74 0 0 1-1.459 2.292c-1.32 1.937.114 9.498-.032 11.837a4.39 4.39 0 0 0 .81 3.243c.955 1.064 2.56 1.157 3.99 1.174l2.628.032a3.433 3.433 0 0 0 1.166-.12 3.544 3.544 0 0 0 1.322-1.02c2.185-2.302 2.659-9.832 5.833-9.805a2.326 2.326 0 0 1 1.37.355c.575.422.744 1.196 1.151 1.782a3.358 3.358 0 0 0 3.9.91 8.737 8.737 0 0 0 3.32-2.682 13.092 13.092 0 0 1 3.103-2.965c1.691-.987 3.603-1.417 5.25-2.531 1.375-.932 2.158-2.284 3.393-3.313a2.955 2.955 0 0 1 3.598-.202c1.947 1.016 2.033 2.682 2.92 4.452z"
        fill="#2f2e41"
      />
      <path
        d="M363.21 460.701a32.236 32.236 0 0 1 14.103 1.133 7.465 7.465 0 0 1 3.93 2.332 7.134 7.134 0 0 1 1.12 2.944 23.793 23.793 0 0 1-1.706 14.336 1.884 1.884 0 0 0-.236 1.533 2.692 2.692 0 0 0 .788.78 2.786 2.786 0 0 1-.169 4.167c-.377.275-.873.515-.946.976-.08.503.392.897.76 1.25a4.493 4.493 0 0 1 1.255 4.13 9.05 9.05 0 0 0-.407 1.83 5.864 5.864 0 0 0 .66 2.175 9.515 9.515 0 0 1 .61 4.81 5.27 5.27 0 0 0-.055 2.353 5.337 5.337 0 0 0 .894 1.412c1.454 1.963 1.774 5.245-.337 6.475a4.875 4.875 0 0 1 2.6 5.03c1.26-.673 2.789.187 3.838 1.156s2.122 2.154 3.55 2.226c.994.05 2.042-.467 2.95-.057 1.38.623 1.333 2.86 2.69 3.532 1.19.588 2.849-.372 3.863.485.353.298.533.76.874 1.072.77.705 1.973.405 3.016.364a7.102 7.102 0 0 1 6.023 3.676 18.024 18.024 0 0 1 2.064 7.053 9.474 9.474 0 0 1-.077 4.053 3.481 3.481 0 0 1-2.855 2.573c-12.421.804-24.678-2.174-36.772-5.12-3.552-.864-7.165-1.877-10.128-4.019-2.692-1.947-4.67-4.7-6.601-7.403-3.56-4.985-7.142-10.007-9.689-15.577-3.278-7.169-4.74-15.011-6.173-22.763a21.13 21.13 0 0 1-.52-6.35 17.906 17.906 0 0 1 2.795-6.962 74.348 74.348 0 0 1 5.659-7.978 20.695 20.695 0 0 1 12.63-7.627z"
        opacity={0.1}
      />
      <path
        d="M364.029 459.882a32.237 32.237 0 0 1 14.103 1.133 7.465 7.465 0 0 1 3.93 2.332 7.134 7.134 0 0 1 1.12 2.944 23.793 23.793 0 0 1-1.706 14.336 1.884 1.884 0 0 0-.236 1.533 2.692 2.692 0 0 0 .788.78 2.786 2.786 0 0 1-.169 4.167c-.377.275-.873.515-.946.976-.08.503.392.897.76 1.25a4.493 4.493 0 0 1 1.255 4.13 9.05 9.05 0 0 0-.407 1.83 5.864 5.864 0 0 0 .66 2.175 9.515 9.515 0 0 1 .61 4.81 5.27 5.27 0 0 0-.055 2.353 5.336 5.336 0 0 0 .894 1.412c1.454 1.963 1.774 5.245-.337 6.475a4.875 4.875 0 0 1 2.6 5.03c1.26-.673 2.789.188 3.838 1.157s2.122 2.154 3.55 2.225c.994.05 2.042-.467 2.95-.057 1.38.623 1.333 2.86 2.69 3.532 1.19.588 2.849-.372 3.863.485.353.298.533.76.874 1.072.77.705 1.973.405 3.016.364a7.102 7.102 0 0 1 6.023 3.676 18.024 18.024 0 0 1 2.064 7.053 9.474 9.474 0 0 1-.077 4.053 3.481 3.481 0 0 1-2.855 2.573c-12.422.804-24.678-2.174-36.772-5.12-3.552-.864-7.165-1.876-10.128-4.019-2.692-1.947-4.67-4.7-6.601-7.403-3.56-4.985-7.142-10.007-9.689-15.577-3.278-7.169-4.74-15.011-6.174-22.763a21.13 21.13 0 0 1-.52-6.35 17.906 17.906 0 0 1 2.796-6.962 74.348 74.348 0 0 1 5.659-7.978 20.695 20.695 0 0 1 12.629-7.627z"
        fill={primaryColor}
      />
    </svg>
  );
};

UndrawIntoTheNight.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawIntoTheNight;
