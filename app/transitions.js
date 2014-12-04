export default function(){
  this.transition(
    this.toRoute('calculator'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('calculator.fancy'),
    this.use('crossFade')
  );
}
