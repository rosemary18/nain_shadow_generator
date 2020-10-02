import React, { Component } from 'react'
import { Dimensions, Linking, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { ButtonStyles, ContainerStyles, ShadowStyles, TextStyles } from '../../assets/styles';
import Androw from 'react-native-androw'
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal'
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';

class MainScreen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             colorSet1: '#FFFFFF',
             colorSet2: '#000000',
             opcSet: 0,
             radiusSet: 0,
             heightSet: 0,
             widthSet: 0,
             color1: '#FFFFFF',
             color2: '#000000',
             elv: 0,
             shadowColor: 'black',
             radius: 0,
             opc: 0,
             height: 0,
             width: 0,
             LayoutWidth: 0,
             modalColor1: false,
             modalColor2: false,
             modalOpacity: false,
             modalRadius: false,
             modalHeight: false,
             modalWidth: false

        }
    }

    componentDidMount() {
        ToastAndroid.showWithGravityAndOffset(
            "Assalamualaikum, blessings be with you ❤", 
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
            )
    }

    _handleOpenURL = () => {
        Linking.openURL("https://github.com/Rosemary18");
    }

    _handleApplyColor1 = () => {
        this.setState({
            color1: this.state.colorSet1,
            modalColor1: false,
            elv: 0
        })
    }

    _handleApplyColor2 = () => {
        this.setState({
            color2: this.state.colorSet2,
            modalColor2: false,
            elv: 0
        })
    }

    _handleApplyRadius = () => {
        this.setState({
            radius: this.state.radiusSet,
            modalRadius: false,
            elv: 0
        })
    }

    _handleApplyOpc = () => {
        this.setState({
            opc: this.state.opcSet,
            modalOpacity: false,
            elv: 0
        })
    }

    _handleApplyHeight = () => {
        this.setState({
            height: this.state.heightSet,
            modalHeight: false,
            elv: 0
        })
    }

    _handleApplyWidth = () => {
        this.setState({
            width: this.state.widthSet,
            modalWidth: false,
            elv: 0
        })
    }

    _handleApplyElv = (v) => {
        var round = Math.round(v);
        if (round === 1){
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.18,
                radius: 1.00,
                height: 1,
                width: 0
            })
        } else if (round === 2) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.20,
                radius: 1.41,
                height: 1,
                width: 0
            })
        } else if (round === 3) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.22,
                radius: 2.22,
                height: 1,
                width: 0
            })
        } else if (round === 4) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.23,
                radius: 2.62,
                height: 2,
                width: 0
            })
        } else if (round === 5) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.25,
                radius: 3.84,
                height: 2,
                width: 0
            })
        } else if (round === 6) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.27,
                radius: 4.65,
                height: 3,
                width: 0
            })
        } else if (round === 7) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.29,
                radius: 4.65,
                height: 3,
                width: 0
            })
        } else if (round === 8) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.30,
                radius: 4.65,
                height: 4,
                width: 0
            })
        } else if (round === 9) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.32,
                radius: 5.46,
                height: 4,
                width: 0
            })
        } else if (round === 10) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.34,
                radius: 6.27,
                height: 5,
                width: 0
            })
        } else if (round === 11) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.36,
                radius: 6.68,
                height: 5,
                width: 0
            })
        } else if (round === 12) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.37,
                radius: 7.49,
                height: 6,
                width: 0
            })
        } else if (round === 13) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.39,
                radius: 8.30,
                height: 6,
                width: 0
            })
        } else if (round === 14) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.41,
                radius: 9.11,
                height: 7,
                width: 0
            })
        } else if (round === 15) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.43,
                radius: 9.51,
                height: 7,
                width: 0
            })
        } else if (round === 16) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.44,
                radius: 10.32,
                height: 8,
                width: 0
            })
        } else if (round === 17) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.46,
                radius: 11.14,
                height: 8,
                width: 0
            })
        } else if (round === 18) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.48,
                radius: 11.95,
                height: 9,
                width: 0
            })
        } else if (round === 19) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.50,
                radius: 12.35,
                height: 9,
                width: 0
            })
        } else if (round === 20) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.51,
                radius: 13.16,
                height: 10,
                width: 0
            })
        } else if (round === 21) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.53,
                radius: 13.97,
                height: 10,
                width: 0
            })
        } else if (round === 22) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.55,
                radius: 14.78,
                height: 11,
                width: 0
            })
        } else if (round === 23) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.57,
                radius: 15.19,
                height: 11,
                width: 0
            })
        } else if (round === 24) {
            this.setState({
                elv: round,
                color2: '#000000',
                opc: 0.58,
                radius: 16.00,
                height: 12,
                width: 0
            })
        }
    }

    _renderModalColor1 = () => (
        <View style={ContainerStyles.default.container6}>
            <View style={[ContainerStyles.default.modalContent, {height: Dimensions.get('screen').width - 32}]}>
                <TriangleColorPicker
                    style={{flex: 1}}
                    color={this.state.colorSet1}
                    onColorChange={(color) => this.setState({colorSet1: fromHsv(color)})}
                />
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Androw style={ShadowStyles.default.shadow1}>
                        <View style={{borderRadius: 5, padding: 4, backgroundColor: '#FFFFFF'}}>
                            <Text style={TextStyles.default.textButtonTitle}>Color I : {this.state.colorSet1}</Text>
                        </View>
                    </Androw>
                </View>
                <TouchableOpacity 
                    style={{alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#707070', borderRadius: 5}} 
                    onPress={() => this._handleApplyColor1()}>
                    <Text style={[TextStyles.default.textValue, {color: '#FFF'}]}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    _renderModalColor2 = () => (
        <View style={ContainerStyles.default.container6}>
            <View style={[ContainerStyles.default.modalContent, {height: Dimensions.get('screen').width - 32}]}>
                <TriangleColorPicker
                    style={{flex: 1}}
                    color={this.state.colorSet2}
                    onColorChange={(color) => this.setState({colorSet2: fromHsv(color)})}
                />
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Androw style={ShadowStyles.default.shadow1}>
                        <View style={{borderRadius: 5, padding: 4, backgroundColor: '#FFFFFF'}}>
                            <Text style={TextStyles.default.textButtonTitle}>Color II : {this.state.colorSet1}</Text>
                        </View>
                    </Androw>
                </View>
                <TouchableOpacity 
                    style={{alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#707070', borderRadius: 5}} 
                    onPress={() => this._handleApplyColor2()}>
                    <Text style={[TextStyles.default.textValue, {color: '#FFF'}]}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    _renderOpacity = () => (
        <View style={ContainerStyles.default.container6}>
            <View style={ContainerStyles.default.modalContent}>
                <View style={{height: 40}}>
                    <Slider 
                        style={{height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#707070"
                        maximumTrackTintColor="#707070"
                        thumbTintColor="#707070"
                        value={this.state.opcSet}
                        onValueChange={(v) => this.setState({opcSet: parseFloat(v.toFixed(2))})}
                        />
                </View>
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Androw style={ShadowStyles.default.shadow1}>
                        <View style={{borderRadius: 5, padding: 4, backgroundColor: '#FFFFFF'}}>
                            <Text style={TextStyles.default.textButtonTitle}>Opacity : {this.state.opcSet}</Text>
                        </View>
                    </Androw>
                </View>
                <TouchableOpacity 
                    style={{alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#707070', borderRadius: 5}} 
                    onPress={() => this._handleApplyOpc()}>
                    <Text style={[TextStyles.default.textValue, {color: '#FFF'}]}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    _renderRadius = () => (
        <View style={ContainerStyles.default.container6}>
            <View style={ContainerStyles.default.modalContent}>
                <View style={{height: 40}}>
                    <Slider 
                        style={{height: 40}}
                        minimumValue={0}
                        maximumValue={25}
                        minimumTrackTintColor="#707070"
                        maximumTrackTintColor="#707070"
                        thumbTintColor="#707070"
                        value={this.state.radiusSet}
                        onValueChange={(v) => this.setState({radiusSet: parseFloat(v.toFixed(2))})}
                        />
                </View>
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Androw style={ShadowStyles.default.shadow1}>
                        <View style={{borderRadius: 5, padding: 4, backgroundColor: '#FFFFFF'}}>
                            <Text style={TextStyles.default.textButtonTitle}>Radius : {this.state.radiusSet}</Text>
                        </View>
                    </Androw>
                </View>
                <TouchableOpacity 
                    style={{alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#707070', borderRadius: 5}} 
                    onPress={() => this._handleApplyRadius()}>
                    <Text style={[TextStyles.default.textValue, {color: '#FFF'}]}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    _renderHeight = () => (
        <View style={ContainerStyles.default.container6}>
            <View style={ContainerStyles.default.modalContent}>
                <View style={{height: 40}}>
                    <Slider 
                        style={{height: 40}}
                        minimumValue={0}
                        maximumValue={25}
                        minimumTrackTintColor="#707070"
                        maximumTrackTintColor="#707070"
                        thumbTintColor="#707070"
                        value={this.state.heightSet}
                        onValueChange={(v) => this.setState({heightSet: parseFloat(v.toFixed(2))})}
                        />
                </View>
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Androw style={ShadowStyles.default.shadow1}>
                        <View style={{borderRadius: 5, padding: 4, backgroundColor: '#FFFFFF'}}>
                            <Text style={TextStyles.default.textButtonTitle}>Height : {this.state.heightSet}</Text>
                        </View>
                    </Androw>
                </View>
                <TouchableOpacity 
                    style={{alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#707070', borderRadius: 5}} 
                    onPress={() => this._handleApplyHeight()}>
                    <Text style={[TextStyles.default.textValue, {color: '#FFF'}]}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    _renderWidth = () => (
        <View style={ContainerStyles.default.container6}>
            <View style={ContainerStyles.default.modalContent}>
                <View style={{height: 40}}>
                    <Slider 
                        style={{height: 40}}
                        minimumValue={0}
                        maximumValue={25}
                        minimumTrackTintColor="#707070"
                        maximumTrackTintColor="#707070"
                        thumbTintColor="#707070"
                        value={this.state.widthSet}
                        onValueChange={(v) => this.setState({widthSet: parseFloat(v.toFixed(2))})}
                        />
                </View>
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Androw style={ShadowStyles.default.shadow1}>
                        <View style={{borderRadius: 5, padding: 4, backgroundColor: '#FFFFFF'}}>
                            <Text style={TextStyles.default.textButtonTitle}>Width : {this.state.widthSet}</Text>
                        </View>
                    </Androw>
                </View>
                <TouchableOpacity 
                    style={{alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#707070', borderRadius: 5}} 
                    onPress={() => this._handleApplyWidth()}>
                    <Text style={[TextStyles.default.textValue, {color: '#FFF'}]}>Terapkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
    render() {
        var shadow = {
                    shadowColor: this.state.color2, 
                    shadowOffset: {
                        width: this.state.width, 
                        height: this.state.height
                    }, 
                    shadowOpacity: this.state.opc, 
                    shadowRadius: this.state.radius
                }
        return (
            <View style={ContainerStyles.default.container1}>
                <Modal 
                    isVisible={this.state.modalColor1}
                    onBackdropPress={() => this.setState({modalColor1: false})}
                    onBackButtonPress={() => this.setState({modalColor1: false})}
                    animationIn='zoomIn'
                    animationInTiming={300}
                    animationOut='zoomOut'
                    animationOutTiming={300}
                    >
                    {
                        this._renderModalColor1()
                    }
                    
                </Modal>
                <Modal 
                isVisible={this.state.modalColor2}
                onBackdropPress={() => this.setState({modalColor2: false})}
                onBackButtonPress={() => this.setState({modalColor2: false})}
                animationIn='zoomIn'
                animationInTiming={300}
                animationOut='zoomOut'
                animationOutTiming={300}
                >
                {
                    this._renderModalColor2()
                }
                </Modal>
                <Modal 
                    isVisible={this.state.modalOpacity}
                    onBackdropPress={() => this.setState({modalOpacity: false})}
                    onBackButtonPress={() => this.setState({modalOpacity: false})}
                    animationIn='zoomIn'
                    animationInTiming={300}
                    animationOut='zoomOut'
                    animationOutTiming={300}
                    >
                    {
                        this._renderOpacity()
                    }
                </Modal>
                <Modal 
                    isVisible={this.state.modalRadius}
                    onBackdropPress={() => this.setState({modalRadius: false})}
                    onBackButtonPress={() => this.setState({modalRadius: false})}
                    animationIn='zoomIn'
                    animationInTiming={300}
                    animationOut='zoomOut'
                    animationOutTiming={300}
                    >
                    {
                        this._renderRadius()
                    }
                </Modal>
                <Modal 
                    isVisible={this.state.modalHeight}
                    onBackdropPress={() => this.setState({modalHeight: false})}
                    onBackButtonPress={() => this.setState({modalHeight: false})}
                    animationIn='zoomIn'
                    animationInTiming={300}
                    animationOut='zoomOut'
                    animationOutTiming={300}
                    >
                    {
                        this._renderHeight()
                    }
                </Modal>
                <Modal 
                    isVisible={this.state.modalWidth}
                    onBackdropPress={() => this.setState({modalWidth: false})}
                    onBackButtonPress={() => this.setState({modalWidth: false})}
                    animationIn='zoomIn'
                    animationInTiming={300}
                    animationOut='zoomOut'
                    animationOutTiming={300}
                    >
                    {
                        this._renderWidth()
                    }
                </Modal>
                <View style={ContainerStyles.default.container2}>
                    <View style={[ContainerStyles.default.container3, { borderRadius: 8, backgroundColor: '#D2FFBC'}]}>
                        <Text style={TextStyles.default.textButtonTitle}>{"↪ "}Generate your Android and iOS shadow with this app. By <Text style={[TextStyles.default.textButtonTitle, {color: '#2DB9FF'}]} onPress={() => this._handleOpenURL()}>Rosemary18</Text>{" ↩"}</Text>
                    </View>
                </View>
                <View style={[ContainerStyles.default.container1, {padding: 8}]}>
                    <View style={ContainerStyles.default.container1}>
                        <View style={[ContainerStyles.default.container1, {flexDirection: 'row'}]}>
                            <View style={ContainerStyles.default.container5} onLayout={(event) => this.setState({LayoutWidth: event.nativeEvent.layout.width - 64})}>
                                <Androw style={this.state.elv > 0 ? {} : shadow}>
                                    <View style={{height: this.state.LayoutWidth, width: this.state.LayoutWidth, borderTopRightRadius: 15, borderBottomLeftRadius: 15, backgroundColor: this.state.color1, elevation: this.state.elv > 0 ? this.state.elv : 0}} />
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.container5}>
                                <Androw style={this.state.elv > 0 ? {} : shadow}>
                                    <View style={{height: this.state.LayoutWidth, width: this.state.LayoutWidth, borderTopLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: this.state.color1, elevation: this.state.elv > 0 ? this.state.elv : 0}} />
                                </Androw>
                            </View>
                        </View>
                        <View style={[ContainerStyles.default.container1, {flexDirection: 'row'}]}>
                            <View style={ContainerStyles.default.container5}>
                                <Androw style={this.state.elv > 0 ? {} : shadow}>
                                    <View style={{height: this.state.LayoutWidth, width: this.state.LayoutWidth, borderRadius: this.state.LayoutWidth / 2, backgroundColor: this.state.color1, elevation: this.state.elv > 0 ? this.state.elv : 0}} />
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.container5}>
                                <Androw style={this.state.elv > 0 ? {} : shadow}>
                                    <View style={{height: this.state.LayoutWidth, width: this.state.LayoutWidth, borderRadius: 15, backgroundColor: this.state.color1, elevation: this.state.elv > 0 ? this.state.elv : 0}} />
                                </Androw>
                            </View>
                        </View>
                    </View>
                </View>
                <Androw style={ShadowStyles.default.shadowBottomSet}>
                    <View style={ContainerStyles.default.containerBottomSet}>
                        <View style={{paddingRight: 8}}>
                            <Text style={TextStyles.default.textButtonTitle}>Elevation</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 1}}>
                                    <Slider 
                                        style={{height: 40}}
                                        minimumValue={0}
                                        maximumValue={24}
                                        minimumTrackTintColor="#707070"
                                        maximumTrackTintColor="#707070"
                                        thumbTintColor="#FFFFFF"
                                        value={this.state.elv}
                                        onValueChange={(v) => this._handleApplyElv(v)}
                                        />
                                </View>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <View style={ContainerStyles.default.valueSlider}>
                                        <Text style={TextStyles.default.textButtonTitle}>{this.state.elv}</Text>
                                    </View>
                                </Androw>
                            </View>
                        </View>
                        <View style={ContainerStyles.default.containerButtons}>
                            <View style={ContainerStyles.default.containerButton}>
                                <Text style={TextStyles.default.textButtonTitle}>Color I</Text>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <TouchableOpacity style={ButtonStyles.default.button1} onPress={() => this.setState({modalColor1: true})}>
                                        <Androw style={ShadowStyles.default.shadow1}>
                                            <View style={{height: 48, width: 48, borderRadius: 5, backgroundColor: this.state.color1, borderWidth: 0.5, borderColor: '#00000029'}} />
                                        </Androw>
                                    </TouchableOpacity>
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.containerButton}>
                                <Text style={TextStyles.default.textButtonTitle}>Color II</Text>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <TouchableOpacity style={ButtonStyles.default.button1} onPress={() => this.setState({modalColor2: true})}>
                                        <Androw style={ShadowStyles.default.shadow1}>
                                            <View style={{height: 48, width: 48, borderRadius: 5, backgroundColor: this.state.color2, borderWidth: 0.5, borderColor: '#00000029'}} />
                                        </Androw>
                                    </TouchableOpacity>
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.containerButton}>
                                <Text style={TextStyles.default.textButtonTitle}>Opacity</Text>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <TouchableOpacity style={ButtonStyles.default.button1} onPress={() => this.setState({modalOpacity: true})}>
                                        <View style={ContainerStyles.default.containerButtonItem}>
                                            <Text style={TextStyles.default.textValue}>{this.state.opc}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.containerButton}>
                                <Text style={TextStyles.default.textButtonTitle}>Radius</Text>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <TouchableOpacity style={ButtonStyles.default.button1} onPress={() => this.setState({modalRadius: true})}>
                                        <View style={ContainerStyles.default.containerButtonItem}>
                                            <Text style={TextStyles.default.textValue}>{this.state.radius}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.containerButton}>
                                <Text style={TextStyles.default.textButtonTitle}>Height</Text>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <TouchableOpacity style={ButtonStyles.default.button1} onPress={() => this.setState({modalHeight: true})}>
                                        <View style={ContainerStyles.default.containerButtonItem}>
                                            <Text style={TextStyles.default.textValue}>{this.state.height}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Androw>
                            </View>
                            <View style={ContainerStyles.default.containerButton}>
                                <Text style={TextStyles.default.textButtonTitle}>Width</Text>
                                <Androw style={ShadowStyles.default.shadow1}>
                                    <TouchableOpacity style={ButtonStyles.default.button1} onPress={() => this.setState({modalWidth: true})}>
                                        <View style={ContainerStyles.default.containerButtonItem}>
                                            <Text style={TextStyles.default.textValue}>{this.state.width}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Androw>
                            </View>
                        </View>
                    </View>
                </Androw>
            </View>
        )
    }
}

export default MainScreen;
