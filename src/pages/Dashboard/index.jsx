import IconArrowLeft from '../../assets/IconArrowLeft'
import IconArrowRight from '../../assets/IconArrowRight'

const Dashboard = () => {

    return (

        <body>

            {
                //component header - button
            }

            <main>

                <ul>

                    {
                        //component planet - li
                    }       

                </ul>

                {
                    window.matchMedia("(max-width: 1024px)").matches ?

                        <section>

                            <div>

                                <IconArrowLeft/>

                                <h1>  </h1>

                                <IconArrowRight/>

                            </div>

                            <p>  </p>

                        </section>
        
                    : 

                        //<modal component>
                    
                              //component planet

                            <div>

                                <h1>  </h1>

                                <p>  </p>

                            </div>
                            
                        //</modal>

                }
               
            </main>

        </body>
        
    )
}