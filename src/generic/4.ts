/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropPage {
    title: string;
}

class Component<T extends PropPage> {
  constructor (public props: T) {

  }
}

class Page extends Component<PropPage> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};