export interface NetArchNode {
  type: string;
  name: string;
  desc: string;
  level: number;
  cost: number;
  dv: number;
  branch: Array<NetArchNode>;
}


export class CPRedNetArchNode implements NetArchNode {
  id: string;
  type: string;
  name: string;
  desc: string;
  level: number;
  cost: number;
  dv: number;
  branch: Array<CPRedNetArchNode>;

  constructor(param?: NetArchNode) {
    this.type = param ? param.type : '';
    this.name = param ? param.name : '';
    this.desc = param ? param.desc : '';
    this.level = param ? param.level : 0;
    this.cost = param ? param.cost : 0;
    this.dv = param ? param.dv : 0;
    this.id = param ?  param['id'] : '';
    this.branch = new Array<CPRedNetArchNode>();
    if (param && param.branch && param.branch.length > 0) {
      param.branch.forEach( branch => {
        this.addChild( new CPRedNetArchNode(branch));
      });
    }
  }

  removeChild(index: number) {
    this.branch = this.branch.splice(index, 1);
  }

  addChild(node: NetArchNode) {
    node.level = this.level + 1;
    this.branch.push(new CPRedNetArchNode(node));
  }

  update(node: CPRedNetArchNode) {
    if( node.id === this.id){
      this.type = node.type;
      this.name = node.name;
      this.desc = node.desc;
      this.cost = node.cost;
      this.dv = node.dv;
      return;
    } else {
      if (this.branch.length > 0) {
        this.branch.forEach( n => n.update(node));
      }
    }
    return;
  }

}
