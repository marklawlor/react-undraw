declare module 'react-undraw' {
  export interface Props {
    name: string;
    primaryColor?: string;
    height?: string;
    style?: object;
    className?: string;
  }

  class Undraw extends React.Component<Props> {
    static setDefaultProps(props: Partial<Props>): void;
  }

  export default Undraw;
}
