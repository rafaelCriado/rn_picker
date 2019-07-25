import React, {Component} from 'react';
import { StyleSheet, View, Text, Picker, Switch, Slider, Modal, Button} from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      servico:0,
      servicos:[
        {nome: 'Serviço 1', valor: 10},
        {nome: 'Serviço 2', valor: 20},
        {nome: 'Serviço 3', valor: 30},
        {nome: 'Serviço 4', valor: 40},
        {nome: 'Serviço 5', valor: 50},
        {nome: 'Serviço 6', valor: 60}
      ],

      valorSwitch:false,

      valorSlider:50,
      modalVisible:false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    let servicosItem = this.state.servicos.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}></Picker.Item>
    });

    return (
      <View style={styles.body}> 
        <Text style={styles.titulo}>Teste Picker</Text>
        <Picker selectedValue={this.state.servico} onValueChange={(itemValue,itemIndex)=>this.setState({servico:itemValue})}>
          {servicosItem}
        </Picker>
        <Text style={styles.valor}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>

        <Text>Exemplo de Switch</Text>
        <Switch thumbColor="black" trackColor={{false: 'brown', true: 'green'}} value={this.state.valorSwitch} onValueChange={(v)=>this.setState({valorSwitch:v})}></Switch>
        <Text>{(this.state.valorSwitch)?'selecionado':'não selecionado'}</Text>
        
        <Text>Exemplo de Slider</Text>
        <Slider minimumTrackTintColor='red' thumbTouchSize={{width: 40, height: 40}} trackStyle={{height:50}} step={1} value={this.state.valorSlider} minimumValue={0} maximumValue={100} onValueChange={(v)=>this.setState({valorSlider:v})}></Slider>
        <Text>{this.state.valorSlider}%</Text>
        
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Text>Testando 1,2,3,...</Text>
            <Button title="Fechar Modal" onPress={() => {this.setModalVisible(false);}}></Button>
          </View>
        </Modal>
        <Button title="Abrir Modal" onPress={() => {this.setModalVisible(true);}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    flex:1,
    padding:20,
    backgroundColor:'blue',
    alignContent:"center",
    alignItems:"center"
  },
  body: {
    backgroundColor: '#DDD',
    flex:1
  },
  titulo: {
    fontSize:20,
    textAlign:"center",
    marginBottom:20
  },
  valor: {
    fontSize:24,
    textAlign:"center",
    fontWeight:"bold",
    marginBottom:20
  }
});
