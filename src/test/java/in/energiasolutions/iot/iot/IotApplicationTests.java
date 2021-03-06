package in.energiasolutions.iot.iot;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class IotApplicationTests {

	@Autowired
	private DeviceRepository deviceRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void savesDevice(){
		deviceRepository.save(new Device("name",null));
		log.info("");
	}


}
