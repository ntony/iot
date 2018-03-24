package in.energiasolutions.iot.iot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class DeviceController {

    @Autowired
    private DeviceRepository deviceRepository;

    @GetMapping("/devices")
    public ResponseEntity findAll(){
        return ResponseEntity.ok(deviceRepository.findAll());
    }

    @GetMapping("/devices/{id}")
    public ResponseEntity findOne(@PathVariable("id")String id){
        return ResponseEntity.ok(deviceRepository.findById(id));
    }

    @PostMapping("/devices")
    public ResponseEntity save(@RequestBody Device device ){
        return ResponseEntity.ok(deviceRepository.save(device));
    }

    @GetMapping("/devices/{id}/modify")
    public ResponseEntity changeState(@PathVariable("id")String id,@RequestParam("switch")String sw,@RequestParam boolean state){
        Device device = deviceRepository.findById(id).get();
        device.getSwitches().put(sw,state);
        return ResponseEntity.ok(deviceRepository.save(device));
    }
}
