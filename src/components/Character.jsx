import React from "react";
import Info from './Info'

const Character = () => {
    return (
        <div className="Table">
            <div className="Character">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <img src="https://steamuserimages-a.akamaihd.net/ugc/793118374717677569/5FE5CB1991A2D6C7E3D5D1A80BE39D0B85B1DED7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Kiana Kaslana" />
                                <h2>Kiana Kaslana</h2>
                            </th>
                            <th>
                                <img src="https://pbs.twimg.com/media/F9HnGz3XIAAvYfI.jpg" alt="Raiden Mei" />
                                <h2>Raiden Mei</h2>
                            </th>
                            <th>
                                <img src="https://static.miraheze.org/hoyodexwiki/8/80/Bronya_Zaychik_%28B3-MU-1%29.png" alt="Bronya Zaychik" />
                                <h2>Bronya Zaychik</h2>
                            </th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Kiana_Kaslana/Story'/>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Raiden_Mei/Story'/>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Bronya_Zaychik/Story'/>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="Character">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <img src="https://static.miraheze.org/hoyodexwiki/2/20/Fu_Hua_%28B3-MU-0%29.png" alt="Fu Hua" />
                                <h2>Fu Hua</h2>
                            </th>
                            <th>
                                <img src="https://steamuserimages-a.akamaihd.net/ugc/789751619479145707/777E74D3F3A52A8FE88B5A3499C296E34A9A8901/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Murata Himeko" />
                                <h2>Murata Himeko</h2>
                            </th>
                            <th>
                                <img src="https://static.miraheze.org/hoyodexwiki/a/ab/Theresa_Apocalypse_%28B3-MU-1%29.png" alt="Theresa Apocalypse" />
                                <h2>Theresa Apocalypse</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Fu_Hua/Story'/>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Murata_Himeko/Story'/>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Theresa_Apocalypse/Story'/>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="Character">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <img src="https://steamuserimages-a.akamaihd.net/ugc/1028455020030189694/F75DF73D1C230D4C4BDDA1709995F24E406AC4D1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Durandal" />
                                <h2>Durandal</h2>
                            </th>
                            <th>
                                <img src="https://static.miraheze.org/hoyodexwiki/d/d2/Kevin_Kaslana_%28B3-MU-0%29.png" alt="Kevin Kaslana" />
                                <h2>Kevin Kaslana</h2>
                            </th>
                            <th>
                                <img src="https://pm1.aminoapps.com/7885/ebda6c56815e2e105e547e2929b054abc7a5197er1-602-395v2_hq.jpg" alt="Otto Apocalypse" />
                                <h2>Otto Apocalypse</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Durandal/Story'/>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Otto_Apocalypse'/>
                            <Info info='View Story' link='https://honkaiimpact3.fandom.com/wiki/Kevin_Kaslana'/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Character;
