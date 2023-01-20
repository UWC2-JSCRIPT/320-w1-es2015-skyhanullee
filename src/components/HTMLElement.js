// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `${this.tag}${this.content}`;
  }
}
// Export class here
export default { HTMLElement };
